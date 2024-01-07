import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getBasic, getOCID } from "../api";
import { Helmet } from "react-helmet";
import { IMemberBasic, IOcid } from "../interfaces";
import { motion, AnimatePresence } from "framer-motion";

function Search() {
  const [characterName, set_characterName] = useState();
  const [searchOcid, set_searchOcid] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const onValid = (data: any) => {
    set_characterName(data.ocid);
    reset();
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
  const onCardClick = (id: string) => {};
  return (
    <>
      <Helmet>
        <title>Wings | Search</title>
      </Helmet>
      <div
        className="bg-cover bg-fixed w-full h-[25dvh] flex flex-col justify-center items-center text-white gap-10 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/bgImage.png')`,
        }}
      >
        <h2 className="absolute bottom-0 text-3xl tracking-widest">검색</h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <form
          className="flex justify-between items-center gap-5"
          onSubmit={handleSubmit(onValid)}
        >
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            className="px-5 py-3 rounded-full lg:text-base text-sm border border-gray-500 lg:w-96 w-[70vw]"
            {...register("ocid", { required: true })}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-red-800 p-3 text-xs rounded-lg text-white hover:bg-red-300 transition"
          >
            조회
          </button>
        </form>
        {ociddData ? (
          <>
            <motion.div
              onClick={() => onCardClick(ociddData.ocid)}
              whileHover={{ y: -5, backgroundColor: "#e9e9e9" }}
              className="mt-10 text-gray-700 border-white bg-white border shadow-md py-5 px-24 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-3"
            >
              {isLoading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <img src="/loading.gif" alt="" className="w-[20vw]" />
                </div>
              ) : (
                <>
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
                </>
              )}
            </motion.div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Search;
