import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQueries, useQuery } from "react-query";
import { getOCID, getBasic, guildID, getGuildBasic } from "../api";


function Member() {
  const { isLoading, data: guildBasic } = useQuery(
    ["my_guildBasic", guildID],
    () => getGuildBasic(guildID),
    {
      staleTime: Infinity,
      enabled: !!guildID,
    }
  );
  const memberArray1 = [];
  if (!isLoading && guildBasic !== undefined) {
    guildBasic.guild_member.map((data) => memberArray1.push(data));
  }
  const getMemberOCID = useQueries(
    memberArray1.map((data) => ({
      queryKey: ["memberName", data],
      queryFn: () => getOCID(data),
      staleTime: Infinity,
      enabled: !!data,
      onError: (error) => {
        if(error.response && error.response.status === 400){
          return null
        }
        throw error;
      }
    }))
  );
    const filtered = getMemberOCID.filter(query => query.data !== null).map(query => query.data);
    console.log(filtered);
  // const getmemberBasic = useQueries(
  //   memberOCIDdata?.map((data) => ({
  //     queryKey: ["memberOCID", data],
  //     queryFn: () => getBasic(data),
  //     staleTime: Infinity,
  //     enabled: !!data
  //   }))
  // );
  // const memberArray2 = [];
  // if(getmemberBasic !== undefined){
  //   getmemberBasic?.map((data) => memberArray2.push(data.data));
  // }
  // const filterdMember = memberArray2
  // .filter(data => (data.character_name !== undefined))
  // .sort((a, b) => b.character_level - a.character_level);
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
            {/* <h2 className="text-2xl mt-10">
              길드원 수: {filterdMember.length}명
            </h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 my-10 text-center gap-3">
              {filterdMember.map((data, number) => (
                <div key={number}>
                  <img src={data?.character_image} alt=""/>
                  <p>{data?.character_name}</p>
                  <p>{data?.character_class}</p>
                  <p>{data?.character_level}</p>
                </div>
              ))}
            </div> */}
          </>
        )}
      </div>
    </>
  );
}

export default Member;
