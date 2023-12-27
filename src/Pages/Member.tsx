import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useQuery } from 'react-query';
import { getGuildID, getGuildBasic } from "../api";

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

function Member() {
  const { data: guildID_Data } = useQuery<IGuildId>(["my_guildID", "두빛나래"],
    () => getGuildID("두빛나래"),
    {
      staleTime: Infinity
    }
  );
  const { isLoading, data: guildBasic } = useQuery<IGuildBasic>(["my_guildBasic", guildID_Data?.oguild_id],
    () => getGuildBasic(guildID_Data?.oguild_id),
    {
      staleTime: Infinity,
      enabled: !!guildID_Data
    }
  );
  return (
    <>
      <Helmet>
        <title>Maple | Member</title>
      </Helmet>
      <div
        className='bg-cover bg-fixed w-full h-[25dvh] flex flex-col justify-center items-center text-white gap-10 relative'
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/bgImage.png')` }}>
        <h2 className='absolute bottom-0 text-3xl font-bold tracking-widest'>멤버</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {isLoading ? "Loading..." :
          <>
            <h2 className='text-2xl mt-10'>길드원 수: {guildBasic?.guild_member_count}명</h2>
            <div className='grid lg:grid-cols-4 grid-cols-1 my-10 text-center gap-3'>
              {guildBasic?.guild_member.map((data, number) => (
                <span className='border border-black lg:p-5 px-12 py-5' key={number}>{data}</span>
              ))}
            </div>
          </>
        }
      </div>
    </>

  );
}

export default Member;