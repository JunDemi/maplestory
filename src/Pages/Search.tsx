import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getBasic, getOCID } from "../api";
import { Helmet } from "react-helmet";

function Search() {
  const [characterName, set_characterName] = useState();
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
  }
  const { data: ociddData } = useQuery(["my_ocid", characterName],
    () => getOCID(characterName),
    {
      staleTime: Infinity,
      enabled: !!characterName
    }
  );
  const { isLoading, data: basicData } = useQuery(["my_basic", ociddData?.ocid],
    () => getBasic(ociddData?.ocid),
    {
      staleTime: Infinity,
      enabled: !!ociddData
    }
  );
  return (
    <>
      <Helmet>
        <title>Wings | Search</title>
      </Helmet>
      <div
        className='bg-cover bg-fixed w-full h-[25dvh] flex flex-col justify-center items-center text-white gap-10 relative'
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/bgImage.png')` }}>
          <h2 className='absolute bottom-0 text-3xl font-bold tracking-widest'>검색</h2>
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <form className='flex justify-between items-center gap-5' onSubmit={handleSubmit(onValid)}>
          <input type="text" placeholder='닉네임을 입력하세요' className='p-5 rounded-full text-xl border border-gray-500 my-10 lg:w-[50vw] w-[60vw]'
            {...register("ocid", { required: true })} autoComplete="off" />
          <button type="submit" className='bg-green-300 p-5'>조회</button>
        </form>
        <div className=''>
          {isLoading ? "로딩" :
            <>
              <p>{basicData?.world_name}</p>
              <p>{basicData?.character_gender}</p>
              <p>{basicData?.character_class}</p>
              <p>{basicData?.character_level}</p>
              <p>{basicData?.character_exp_rate}</p>
              <p>{basicData?.character_guild_name}</p>
              <img src={basicData?.character_image} alt="" />
              <p>{basicData?.character_name}</p>
            </>
          }
        </div>
      </div>
    </>

  );
}

export default Search;
