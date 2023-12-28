import React from "react";
import { Helmet } from "react-helmet";
import { useQueries, useQuery } from "react-query";
import { getOCID, getBasic, guildID, getGuildBasic, yesterday } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { cls } from "../cssUtils";
import { useNavigate, useMatch } from "react-router-dom";

interface IMemberBasic {
  character_name: string;
  character_level: number;
  character_class: string;
  character_image: string;
}

function Member() {
  const navigate =  useNavigate();
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
  const memberArray1:string[] = [];
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
      // onError: (error) => {
      //   if (error.response && error.response.status === 400) {
      //     return null;
      //   }
      //   throw error;
      // },
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
  const memberArray2:IMemberBasic[] = [];
  getmemberBasic.map((query) => memberArray2.push(query.data));
  memberArray2.sort((a, b) => b.character_level - a.character_level);
  //길드 관리자들은 배열에 첫 부분으로 이동
  const adminName = ['해녀데스', '랸냐', '불협화음', '활맥', '키단', '볼짝'];
  adminName.forEach((name) => {
    const indexAdmin = memberArray2.findIndex((item) => item?.character_name === name);
    if (indexAdmin !== -1){
      const move = memberArray2[indexAdmin];
      memberArray2.splice(indexAdmin, 1);
      memberArray2.unshift(move);
    }
  });
  //캐릭터 카드 클릭 이벤트
  const onCardClick = (charater_name: string) => {
    navigate(`/member/${charater_name}`);
  }
  const onOverlayClicked = () => navigate("/member");
  const nameMatch = useMatch("/member/:character_name");
  const clickedCard = 
  nameMatch?.params.character_name && 
  memberArray2.find((char_name) => char_name.character_name === nameMatch.params.character_name);
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
            <h2 className="text-2xl mt-10">
              <p className="text-sm">{yesterday} 기준</p>
              길드원 수: {memberArray2.length}명
            </h2>
            <AnimatePresence>
            <div className="grid lg:grid-cols-4 grid-cols-1 my-10 gap-6">
              {memberArray2
                .map((data, number) => (
                  <motion.div
                    layoutId={data?.character_name}
                    onClick={() => onCardClick(data?.character_name)}
                    key={number}
                    className={cls(
                      data?.character_name === "볼짝" ? 'text-pink-700 border-pink-300' 
                      : data?.character_name === "활맥" ? 'text-blue-700 border-blue-300' 
                      : data?.character_name === "키단" ? 'text-blue-700 border-blue-300' 
                      : data?.character_name === "불협화음" ? 'text-blue-700 border-blue-300' 
                      : data?.character_name === "랸냐" ? 'text-blue-700 border-blue-300' 
                      : data?.character_name === "해녀데스" ? 'text-blue-700 border-blue-300' 
                      : ' text-gray-700 border-white'
                  ,'bg-white border shadow-md py-5 lg:px-14 px-24 cursor-pointer rounded-lg flex flex-col justify-center items-center gap-3')}
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
            {nameMatch ? 
              <>
                <motion.div
                  className="fixed top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-10"
                  onClick={onOverlayClicked}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                />
                <motion.div
                className="absolute w-[40vw] h-[80vh] bg-black left-0 right-0 z-20 mx-auto overflow-hidden"
                >
                  {clickedCard && (
                    <>
                      <h1>Hello</h1>
                    </>
                    )}
                </motion.div>
              </>
            : null}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}

export default Member;
