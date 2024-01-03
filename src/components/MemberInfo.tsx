import React from "react";
import { useQuery } from "react-query";
import { getAbility, getStat } from "../api";
import { cls } from "../cssUtils";

interface IStat {
  character_class: string;
  date: string;
  final_stat: { 
    stat_name: string; 
    stat_value: number; 
  }[];
  remain_ap: string;
}
interface IAbility {
  ability_grade: string;
  ability_info: {
    ability_no: number;
    ability_grade: string;
    ability_value: string;
  }[]
}
function MemberInfo({ ocid }: any) {
  //string타입으로 선언하면 의문 모를 타입 에러가 발생...
  const { data: statData } = useQuery<IStat>(
    ["your_stat", ocid],
    () => getStat(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  const { data: abilityData } = useQuery<IAbility>(
    ["your_ability", ocid],
    () => getAbility(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  return (
    <>
      <div className="w-full overflow-y-scroll p-8 space-y-4 font-bold">
        <div className="w-full">
          <p className="text-gray-500 text-xs">{statData?.final_stat[42].stat_name}</p>
          <h1 className="text-blue-600 tracking-wider text-xl">{Number(statData?.final_stat[42].stat_value).toLocaleString()}</h1>
        </div>
        <div className="w-full border-b border-gray-300 pb-2">
          <p className="text-gray-500 text-xs">스탯 공격력</p>
          <h1 className="text-red-400 tracking-wide text-base">
            {Number(statData?.final_stat[0].stat_value).toLocaleString()} ~ {Number(statData?.final_stat[1].stat_value).toLocaleString()}
          </h1>
        </div>
        <div className="grid grid-cols-3 w-full border-b border-gray-300 gap-5 py-2">
          {[20,16,17,21,18,19].map((data) => (
            <>
              <div>
              <p className="text-gray-500 text-xs">{statData?.final_stat[data].stat_name}</p>
              <p className="text-sm">{Number(statData?.final_stat[data].stat_value).toLocaleString()}</p>
              </div>
            </>
          ))}
        </div>
        <div className="grid grid-cols-2 w-full border-b border-gray-300 gap-5 py-2">
          {[2,3,4,5,6,7,30,35].map((data) => (
            <>
              <div>
              <p className="text-gray-500 text-xs">{statData?.final_stat[data].stat_name}</p>
              <p className="text-sm">{Number(statData?.final_stat[data].stat_value).toLocaleString()}%</p>
              </div>
            </>
          ))}
        </div>
        <div className="grid grid-cols-3 w-full border-b border-gray-300 gap-5 py-2">
          {[13,14,15].map((data) => (
            <>
              <div>
              <p className="text-gray-500 text-xs">{statData?.final_stat[data].stat_name}</p>
              <p className="text-orange-500 text-sm">{Number(statData?.final_stat[data].stat_value).toLocaleString()}</p>
              </div>
            </>
          ))}
        </div>
        <div className="w-full pt-2">
        <p className="text-gray-500 text-xs mb-2">어빌리티</p>
          {abilityData?.ability_info.map((data, number) => (
              <p key={number} className={cls(
                data.ability_grade === "레전드리" ? "text-green-500" :
                data.ability_grade === "유니크" ? "text-yellow-500" :
                data.ability_grade === "에픽" ? "text-purple-600" :
                data.ability_grade === "레어" ? "text-blue-400" : ""
                , "text-xs")}>{data.ability_value}</p>
          ))}
        </div>
      </div>
    </>
  );
}
export default MemberInfo;
