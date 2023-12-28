import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQueries, useQuery } from "react-query";
import { getOCID, getBasic, getGuildID, getGuildBasic } from "../api";

interface IGuildId {
  oguild_id: string;
}
interface IGuildBasic {
  world_name: string;
  guild_name: string;
  guild_level: number;
  guild_master_name: string;
  guild_member_count: number;
  guild_member: string[];
}
interface Iocid {
  ocid: string;
}
interface Ibasic {
  character_name: string;
  character_class?: string;
  character_level?: number;
  character_image?: string;
}
interface ImemberName {
  name: string;
}

function Member() {
  const { data: guildID_Data } = useQuery<IGuildId>(
    ["my_guildID", "두빛나래"],
    () => getGuildID("두빛나래"),
    {
      staleTime: Infinity,
      enabled: !!"두빛나래",
    }
  );
  const { isLoading, data: guildBasic } = useQuery<IGuildBasic>(
    ["my_guildBasic", guildID_Data?.oguild_id],
    () => getGuildBasic(guildID_Data?.oguild_id),
    {
      staleTime: Infinity,
      enabled: !!guildID_Data,
    }
  );
  const memberArray1: string[] = [];
  if (!isLoading && guildBasic !== undefined) {
    guildBasic.guild_member.map((data) => memberArray1.push(data));
  }
  const getMemberOCID = useQueries(
    memberArray1.map((data) => ({
      queryKey: ["memberName", data],
      queryFn: () => getOCID(data),
      staleTime: Infinity,
      enabled: !!data
    }))
  );
  const memberOCIDdata = getMemberOCID.map((query) => query.data.ocid);
  const getmemberBasic = useQueries(
    memberOCIDdata.map((data) => ({
      queryKey: ["memberOCID", data],
      queryFn: () => getBasic(data),
      staleTime: Infinity,
      enabled: !!data
    }))
  );
  const memberArray2:Ibasic[] = [];
  if(getmemberBasic !== undefined){
    getmemberBasic.map((data) => memberArray2.push(data.data));
  }
  const filterdMember = memberArray2
  .filter(data => (data.character_name !== undefined))
  .sort((a:any, b:any) => b.character_level - a.character_level);
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
              길드원 수: {filterdMember.length}명
            </h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 my-10 text-center gap-3">
              {filterdMember.map((data, number) => (
                <div key={number}>
                  <img src={data.character_image} alt=""/>
                  <p>{data.character_name}</p>
                  <p>{data.character_class}</p>
                  <p>{data.character_level}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Member;
