import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getBasic, getOCID, getPop, yesterday } from "../api";
import { Helmet } from "react-helmet";
import { IMemberBasic, IOcid } from "../interfaces";
import { motion, AnimatePresence } from "framer-motion";
import LoadingGIF from "../components/LoadingGIF";
import { cls } from "../Utils";
import MemberStat from "../components/MemberStat";
import MemberItem from "../components/MemberItem";
import MemberCash from "../components/MemberCash";
import MemberHexa from "../components/MemberHexa";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";

function Search() {
  const [characterName, set_characterName] = useState();
  const [isCardClicked, set_isCardClicked] = useState(false);
  const [select_ocid, set_select_ocid] = useRecoilState<string>(ocidState); //클릭된 카드 캐릭터 ocid 전역 상태
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const [notFound, set_notFound] = useState(false); //검색한 캐릭터가 없을 경우
  const [infoType, set_infoType] = useState<"stat" | "item" | "cash" | "hexa">(
    "stat"
  ); //정보 조회 타입 상태
  const onValid = (data: any) => {
    set_characterName(data.name);
    reset();
    if (!ociddData) {
      set_notFound(true);
    }
  };
  //ocid불러오기
  const { data: ociddData } = useQuery<IOcid>(
    ["search_ocid", characterName],
    () => getOCID(characterName),
    {
      staleTime: Infinity,
      enabled: !!characterName,
    }
  );
  //캐릭터 기본 정보 불러오기
  const { isLoading, data: basicData } = useQuery<IMemberBasic>(
    ["search_basic", ociddData?.ocid],
    () => getBasic(ociddData?.ocid),
    {
      staleTime: Infinity,
      enabled: !!ociddData,
    }
  );
  //클릭한 카드 멤버의 ocid를 통해 인기도 조회
  const { data: Pop } = useQuery(
    ["search_pop", ociddData?.ocid],
    () => getPop(ociddData?.ocid),
    {
      staleTime: Infinity,
      enabled: !!ociddData?.ocid,
    }
  );
  //캐릭터 카드 클릭 시 오버레이 작동
  const onCardClick = (id: string) => {
    set_select_ocid(id);
    set_isCardClicked(true);
  };
  //오버레이 배경 클릭 시
  const onOverlayClicked = () => {
    set_select_ocid("");
    set_isCardClicked(false);
    set_infoType("stat");
  };
  return (
    <>
      <Helmet>
        <title>Wings | Search</title>
      </Helmet>
      <div className="h-[100dvh]">
      <div
        className="bg-cover bg-fixed w-full h-[25dvh] flex flex-col justify-center items-center text-white gap-10 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('https://res.cloudinary.com/dgmgeotyk/image/upload/v1705467844/Wings/rm2rvkfabuukt1zida0x.png')`,
        }}
      >
        <h2 className="absolute bottom-0 text-3xl tracking-widest">검색</h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <form className="" onSubmit={handleSubmit(onValid)}>
          <p className="text-xs text-gray-500 tracking-tight mb-2">접속 기준일: {yesterday}</p>
          <div className="flex justify-between items-center border border-gray-500 bg-white rounded-full">
            <input
              type="text"
              placeholder="닉네임을 입력하세요"
              className="py-3 rounded-full lg:text-base text-sm lg:w-96 w-[70vw] px-5"
              {...register("name", { required: true })}
              autoComplete="off"
            />
            <button type="submit" className="p-3 lg:text-base text-sm mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(97 104 118)"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-Linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </form>
        {ociddData ? (
          <>
            {isLoading ? (
              <LoadingGIF />
            ) : (
              <>
                <AnimatePresence>
                  <motion.div
                    layoutId={ociddData.ocid}
                    onClick={() => onCardClick(ociddData.ocid)}
                    whileHover={{ y: -5, backgroundColor: "#e9e9e9" }}
                    className="mt-10 text-gray-700 border-white bg-white border shadow-md py-5 lg:px-32 px-24 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-2"
                  >
                    <p className="text-xs border rounded-full border-orange-300 px-2 py-[0.15rem] text-orange-400">
                      {basicData?.world_name}
                    </p>
                    <img
                      src={basicData?.character_image}
                      alt=""
                      className="w-24"
                    />
                    <span className="flex justify-center items-center gap-2">
                      <p>{basicData?.character_name}</p>
                      <p className="text-xs">Lv.{basicData?.character_level}</p>
                    </span>
                    <p className="text-xs">{basicData?.character_class}</p>
                    <p className="text-xs bg-[whitesmoke] border rounded-full border-gray-300 px-2 py-[0.15rem] text-blue-600">
                      {basicData?.character_guild_name}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  {isCardClicked ? (
                    <>
                      <motion.div
                        className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-20 cursor-pointer"
                        onClick={onOverlayClicked}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                      <motion.div
                        layoutId={ociddData.ocid}
                        className="fixed top-[11dvh] lg:w-[75vw] w-[95vw] lg:h-[80vh] h-[72vh] mx-auto bg-[whitesmoke] z-30 p-1 rounded-xl flex justify-start items-center flex-col"
                      >
                        <div
                          style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('/bgImage.png')`,
                          }}
                          className="w-full bg-blue-300 rounded-lg flex justify-start items-center gap-5 py-2"
                        >
                          <img
                            src={basicData?.character_image}
                            alt=""
                            className="lg:w-32 w-24"
                          />
                          <div className="text-white flex flex-col gap-1 tracking-wider">
                            <p className="text-[0.65rem]">
                              {basicData?.world_name}
                            </p>
                            <div className="flex justify-start items-center gap-3">
                              <p className="text-xs border rounded-full border-blue-300 px-2 py-[0.15rem] text-blue-200">
                                {basicData?.character_guild_name}
                              </p>
                              <p className="lg:text-2xl text-xl ">
                                {basicData?.character_name}
                              </p>
                            </div>
                            <p className="text-sm">
                              Lv.{basicData?.character_level}
                              <span className="text-xs text-gray-300">
                                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;인기도{" "}
                                {Pop?.popularity.toLocaleString()}
                              </span>
                            </p>
                            <p className="text-sm">
                              {basicData?.character_class}
                            </p>
                          </div>
                        </div>
                        <div className="z-10 w-full grid grid-cols-4 shadow-md text-center cursor-pointer text-sm text-gray-500 ">
                          <span
                            className={cls(
                              infoType === "stat"
                                ? "text-blue-500 bg-gray-200"
                                : "",
                              "hover:bg-gray-200 transition py-4"
                            )}
                            onClick={() => set_infoType("stat")}
                          >
                            스탯
                          </span>
                          <span
                            className={cls(
                              infoType === "item"
                                ? "text-green-500 bg-gray-200"
                                : "",
                              "hover:bg-gray-200 transition py-4"
                            )}
                            onClick={() => set_infoType("item")}
                          >
                            장비
                          </span>
                          <span
                            className={cls(
                              infoType === "cash"
                                ? "text-orange-500 bg-gray-200"
                                : "",
                              "hover:bg-gray-200 transition py-4"
                            )}
                            onClick={() => set_infoType("cash")}
                          >
                            캐시
                          </span>
                          <span
                            className={cls(
                              infoType === "hexa"
                                ? "text-purple-500 bg-gray-200"
                                : "",
                              "hover:bg-gray-200 transition py-4"
                            )}
                            onClick={() => set_infoType("hexa")}
                          >
                            HEXA
                          </span>
                        </div>
                        {infoType === "stat" ? (
                          <MemberStat />
                        ) : infoType === "item" ? (
                          <MemberItem />
                        ) : infoType === "cash" ? (
                          <MemberCash />
                        ) : infoType === "hexa" ? (
                          <MemberHexa />
                        ) : null}
                      </motion.div>
                    </>
                  ) : null}
                </AnimatePresence>
              </>
            )}
          </>
        ) : (
          <>
            {notFound ? (
              <>
                {isLoading ? (
                  <LoadingGIF />
                ) : (
                  <div className="flex justify-center items-center text-gray-500 mt-28 gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="lg:w-8 lg:h-8 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                      />
                    </svg>
                    <p className="lg:text-xl text-sm">
                      검색한 캐릭터가 존재하지 않습니다.
                    </p>
                  </div>
                )}
              </>
            ) : null}
          </>
        )}
      </div>
      </div>
    </>
  );
}

export default Search;
