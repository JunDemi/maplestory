import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getBasic, getOCID } from "../api";
import { Helmet } from "react-helmet";

interface Iocid {
  ocid: string;
}

interface Ibasic {
  date: string;
  character_name: string;
  world_name: string;
  character_gender: string;
  character_class: string;
  character_class_level: string;
  character_level: string;
  character_exp_rate: string;
  character_guild_name: string;
  character_image: string;
}

function Search() {
  const [characterName, set_characterName] = useState<string | any>();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Iocid>({
    mode: "all",
  });
  const onValid = (data: any) => {
    set_characterName(data.ocid);
    reset();
  }
  const { data: ociddData } = useQuery<Iocid>(["my_ocid", characterName],
    () => getOCID(characterName),
    {
      staleTime: Infinity,
      enabled: !!characterName
    }
  );
  const { isLoading, data: basicData } = useQuery<Ibasic>(["my_basic", ociddData?.ocid],
    () => getBasic(ociddData?.ocid),
    {
      staleTime: Infinity,
      enabled: !!ociddData
    }
  );
  return (
    <>
      <Helmet>
        <title>Maple | Search</title>
      </Helmet>
      <div className='flex flex-col justify-center items-center mt-72'>
        <form className='flex justify-between items-center gap-5' onSubmit={handleSubmit(onValid)}>
          <input type="text" placeholder='닉네임을 입력하세요' className='p-5 rounded-full text-xl border border-gray-500 my-10 w-[30rem]'
            {...register("ocid", { required: true })} autoComplete="off" />
          <button type="submit" className='bg-green-300 p-5'>조회</button>
        </form>
        <div>
          {isLoading ? "로딩" :
            <>
              <p>{basicData?.world_name}</p>
              <p>{basicData?.character_gender}</p>
              <p>{basicData?.character_class}</p>
              <p>{basicData?.character_level}</p>
              <p>{basicData?.character_exp_rate}</p>
              <p>{basicData?.character_guild_name}</p>
              <img src={basicData?.character_image} alt="" />
            </>
          }
        </div>
      </div>
    </>

  );
}

export default Search;
