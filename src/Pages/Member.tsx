import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQueries, useQuery } from "react-query";
import {
  getOCID,
  getBasic,
  guildID,
  getGuildBasic,
  yesterday,
  getPop,
} from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { cls } from "../Utils";
import MemberStat from "../components/MemberStat";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";
import MemberItem from "../components/MemberItem";
import MemberCash from "../components/MemberCash";
import MemberHexa from "../components/MemberHexa";
import { IMemberBasic } from "../interfaces";

function Member() {
  const [isCardClicked, set_isCardClicked] = useState(false); //카드가 클릭되었는지 아닌지의 상태
  const [matchedName, set_matchedName] = useState<string>(""); //클릭된 카드 멤버의 이름 상태
  const [select_ocid, set_select_ocid] = useRecoilState<string>(ocidState); //클릭된 카드 멤버의 ocid 전역 상태
  const [infoType, set_infoType] = useState<"stat" | "item" | "cash" | "hexa">(
    "stat"
  ); //정보 조회 타입 상태

  //길드 멤버 이름 불러오기
  const { isLoading, data: guildBasic } = useQuery(
    ["my_guildBasic"],
    () => getGuildBasic(),
    {
      staleTime: Infinity,
      enabled: !!guildID,
    }
  );
  //불러온 멤버 목록을 배열에 저장
  const memberArray1: string[] = [];
  if (!isLoading && guildBasic !== undefined) {
    guildBasic.guild_member.map((data: any) => memberArray1.push(data));
  }
  //모든 멤버의 ocid 불러오기
  const getMemberOCID = useQueries(
    memberArray1.map((data) => ({
      queryKey: ["memberName", data],
      queryFn: () => getOCID(data),
      staleTime: Infinity,
      enabled: !!data,
    }))
  );
  //불러온 ocid중 불러오지 못한 값들은 배열에서 제거
  const filtered = getMemberOCID
    .filter((query) => query.data !== null)
    .map((query) => query.data);
  //ocid배열을 통해 멤버들의 캐릭터 기본정보 불러오기
  const getmemberBasic = useQueries(
    filtered.map((data) => ({
      queryKey: ["memberOCID", data?.ocid],
      queryFn: () => getBasic(data?.ocid),
      staleTime: Infinity,
      enabled: !!data,
    }))
  );
  //레벨 높은 순으로 정렬하고 배열에 저장
  const memberArray2: IMemberBasic[] = [];
  getmemberBasic.map((query) => memberArray2.push(query.data));
  memberArray2.sort((a, b) => b.character_level - a.character_level);
  //길드 관리자들은 배열에 첫 부분으로 이동
  const adminName = ["해녀데스", "랸냐", "활맥", "불협화음", "키단", "볼짝"];
  adminName.forEach((name) => {
    const indexAdmin = memberArray2.findIndex(
      (item) => item?.character_name === name
    );
    if (indexAdmin !== -1) {
      const move = memberArray2[indexAdmin];
      memberArray2.splice(indexAdmin, 1);
      memberArray2.unshift(move);
    }
  });
  //캐릭터 카드 클릭 이벤트
  const onCardClick = (charater_name: string) => {
    set_matchedName(charater_name);
    set_isCardClicked(true);
  };
  //카드 클릭 시 나타나는 김고 흐린 배경 클릭 시
  const onOverlayClicked = () => {
    set_matchedName("");
    set_isCardClicked(false);
    set_infoType("stat");
  };
  //클릭한 카드 멤버의 이름과 일치한 배열 내의 이름을 뽑음
  const BasicMatch = memberArray2.find(
    (obj) => obj?.character_name === matchedName
  );
  //클릭한 카드 멤버의 Ocid불러오기
  const { data: OcidforPop } = useQuery(
    ["ocid_for_pop", matchedName],
    () => getOCID(matchedName),
    {
      staleTime: Infinity,
      enabled: !!isCardClicked,
    }
  );
  //클릭한 카드 멤버의 Ocid를 RecoilState에 저장
  useEffect(() => {
    set_select_ocid(OcidforPop?.ocid);
  }, [OcidforPop, set_select_ocid]);
  //클릭한 카드 멤버의 ocid를 통해 인기도 조회
  const { data: Pop } = useQuery(
    ["ocid_for_pop", OcidforPop?.ocid],
    () => getPop(OcidforPop?.ocid),
    {
      staleTime: Infinity,
      enabled: !!OcidforPop?.ocid,
    }
  );
  const selectInfo = (info: "stat" | "item" | "cash" | "hexa") => {
    set_infoType(info);
  };
  return (
    <>
      <Helmet>
        <title>Wings | Member</title>
      </Helmet>
      <div
        className="bg-cover bg-fixed w-full h-[25dvh] flex flex-col justify-center items-center text-white gap-10 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/bgImage.png')`,
        }}
      >
        <h2 className="absolute bottom-0 text-3xl font-bold tracking-widest">
          멤버
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <AnimatePresence>
              <div className="grid lg:grid-cols-4 grid-cols-1 my-10 gap-6">
                <div className="text-xl lg:col-span-4 flex flex-col justify-center items-start gap-1">
                  <p className="text-xs text-gray-500 tracking-tight">기준 접속일: {yesterday}</p>
                  <span className="bg-blue-800 px-4 py-1 rounded-full text-white">{memberArray2.length}명 활동중</span>
                </div>
                {memberArray2.map((data, number) => (
                  <motion.div
                    layoutId={data?.character_name}
                    onClick={() => onCardClick(data?.character_name)}
                    key={number}
                    className={cls(
                      data?.character_name === "볼짝"
                        ? "text-pink-700 border-pink-300"
                        : data?.character_name === "활맥"
                        ? "text-blue-700 border-blue-300"
                        : data?.character_name === "키단"
                        ? "text-blue-700 border-blue-300"
                        : data?.character_name === "불협화음"
                        ? "text-blue-700 border-blue-300"
                        : data?.character_name === "랸냐"
                        ? "text-blue-700 border-blue-300"
                        : data?.character_name === "해녀데스"
                        ? "text-blue-700 border-blue-300"
                        : " text-gray-700 border-white",
                      "bg-white border shadow-md py-5 lg:px-14 px-24 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-3"
                    )}
                    whileHover={{ y: -5, backgroundColor: "#e9e9e9" }}
                  >
                    <img src={data?.character_image} alt="" className="w-24" />
                    <span className="flex justify-center items-center gap-2">
                      <p>{data?.character_name}</p>
                      <p className="text-xs">Lv.{data?.character_level}</p>
                    </span>
                    <p className="text-xs">{data?.character_class}</p>
                  </motion.div>
                ))}
              </div>
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
                    layoutId={matchedName}
                    className="fixed top-[11dvh] lg:w-[75vw] w-[95vw] lg:h-[80vh] h-[70vh] mx-auto bg-[whitesmoke] z-30 p-1 rounded-xl flex justify-start items-center flex-col"
                  >
                    <div
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url('/bgImage.png')`,
                      }}
                      className="w-full bg-blue-300 rounded-lg flex justify-start items-center gap-5"
                    >
                      <motion.img
                        src={BasicMatch?.character_image}
                        alt=""
                        className="lg:w-32 w-24"
                      />
                      <div className="text-white flex flex-col gap-1 tracking-wider">
                        <div className="flex justify-start items-center gap-3">
                          <p className="lg:text-2xl text-xl font-bold">
                            {BasicMatch?.character_name}
                          </p>

                          {BasicMatch?.character_name === "볼짝" ? (
                            <span className="text-xs bg-red-800 px-2 py-[0.1rem] rounded-full">
                              마스터
                            </span>
                          ) : BasicMatch?.character_name === "활맥" ? (
                            <span className="text-xs bg-blue-800 px-2 py-[0.1rem] rounded-full">
                              부마스터
                            </span>
                          ) : BasicMatch?.character_name === "키단" ? (
                            <span className="text-xs bg-blue-800 px-2 py-[0.1rem] rounded-full">
                              부마스터
                            </span>
                          ) : BasicMatch?.character_name === "불협화음" ? (
                            <span className="text-xs bg-blue-800 px-2 py-[0.1rem] rounded-full">
                              부마스터
                            </span>
                          ) : BasicMatch?.character_name === "랸냐" ? (
                            <span className="text-xs bg-blue-800 px-2 py-[0.1rem] rounded-full">
                              부마스터
                            </span>
                          ) : BasicMatch?.character_name === "해녀데스" ? (
                            <span className="text-xs bg-blue-800 px-2 py-[0.1rem] rounded-full">
                              부마스터
                            </span>
                          ) : null}
                        </div>
                        <p className="text-sm">
                          Lv.{BasicMatch?.character_level}
                          <span className="text-xs text-gray-300">
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;인기도{" "}
                            {Pop?.popularity.toLocaleString()}
                          </span>
                        </p>
                        <p className="text-sm">{BasicMatch?.character_class}</p>
                      </div>
                    </div>
                    <div className="z-10 w-full grid grid-cols-4 shadow-md text-center cursor-pointer text-sm text-gray-500 font-bold">
                      <span
                        className={cls(
                          infoType === "stat"
                            ? "text-blue-500 bg-gray-200"
                            : "",
                          "hover:bg-gray-200 transition py-4"
                        )}
                        onClick={() => selectInfo("stat")}
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
                        onClick={() => selectInfo("item")}
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
                        onClick={() => selectInfo("cash")}
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
                        onClick={() => selectInfo("hexa")}
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
      </div>
    </>
  );
}

export default Member;
