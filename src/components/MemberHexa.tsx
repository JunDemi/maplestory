import React from "react";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";
import { useQuery } from "react-query";
import { IHexa, IHexaStat } from "../interfaces";
import { getHexa, getHexaStat } from "../api";
import { hexaStatLevel } from "../Utils";

function MemberHexa() {
  //Recoil State
  const [ocid] = useRecoilState(ocidState);
  //Hexa 스킬
  const { data: hexaData } = useQuery<IHexa>(
    ["your_hexa", ocid],
    () => getHexa(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  //Hexa 스탯
  const { isLoading, data: hexaStatData } = useQuery<IHexaStat>(
    ["your_hexaStat", ocid],
    () => getHexaStat(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  const hexaStat = hexaStatData?.character_hexa_stat_core[0];
  return (
    <>
      {hexaData?.character_skill_grade !== null ? ( //6차전직을 하지 않은 캐릭터 필터
        <>
          {!isLoading ? (
            <>
              {ocid ? (
                <div className="flex lg:flex-row flex-col lg:justify-between justify-start items-start overflow-y-scroll w-full p-5 gap-3 font-bold">
                  <div className="p-3 border border-gray-300 rounded-lg">
                    <span className="text-sm text-white bg-purple-800 px-2 py-1 rounded-full">
                      HEXA STATS
                    </span>
                    {hexaStatData?.character_hexa_stat_core.length === 0 ? (
                      <p className="text-xs mt-5">헥사 스탯이 없습니다</p>
                    ) : (
                      <div className="flex flex-col gap-5 items-start justify-center py-5 text-xs">
                        {hexaStat?.main_stat_level !== 0 ? (
                          <div className="flex gap-3 justify-start items-center">
                            <span className="bg-purple-600 py-1 px-2 text-white rounded-lg">
                              Lv.{hexaStat?.main_stat_level}
                            </span>
                            <p className="text-purple-600">
                              {hexaStat?.main_stat_name +
                                " +" +
                                hexaStatLevel(
                                  hexaStatData?.character_class,
                                  "main",
                                  hexaStat?.main_stat_name,
                                  hexaStat?.main_stat_level
                                )}
                            </p>
                          </div>
                        ) : null}
                        {hexaStat?.sub_stat_level_1 !== 0 ? (
                          <div className="flex gap-3 justify-start items-center">
                            <span className="bg-purple-400 py-1 px-2 text-white rounded-lg">
                              Lv.{hexaStat?.sub_stat_level_1}
                            </span>
                            <p>
                              {hexaStat?.sub_stat_name_1 +
                                " +" +
                                hexaStatLevel(
                                  hexaStatData?.character_class,
                                  "sub",
                                  hexaStat?.sub_stat_name_1,
                                  hexaStat?.sub_stat_level_1
                                )}
                            </p>
                          </div>
                        ) : null}
                        {hexaStat?.sub_stat_level_2 !== 0 ? (
                          <div className="flex gap-3 justify-start items-center">
                            <span className="bg-purple-400 py-1 px-2 text-white rounded-lg">
                              Lv.{hexaStat?.sub_stat_level_2}
                            </span>
                            <p>
                              {hexaStat?.sub_stat_name_2 +
                                " +" +
                                hexaStatLevel(
                                  hexaStatData?.character_class,
                                  "sub",
                                  hexaStat?.sub_stat_name_2,
                                  hexaStat?.sub_stat_level_2
                                )}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url('/purpleSpace.png')`,
                    }}
                    className="lg:w-2/3 text-white bg-fixed lg:grid-cols-4 grid grid-cols-2 justify-center items-center p-3 gap-5 border border-gray-300 rounded-lg"
                  >
                    {hexaData?.character_skill.map((data, number) => (
                      <div
                        className="flex flex-col justify-center items-center"
                        key={number}
                      >
                        <div className="hex-t" />
                        <div className="bg-[#cfb6e940] w-32 h-[4.5rem] px-2 flex flex-col justify-center items-center gap-2">
                          <div className="flex justify-center items-center gap-2">
                            <img src={data.skill_icon} alt="" className="w-7" />
                            <p className="text-[0.6rem]">{data.skill_name}</p>
                          </div>
                          <p className="text-xs">Lv.{data.skill_level}</p>
                        </div>
                        <div className="hex-b" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            "로딩중..."
          )}
        </>
      ) : (
        "6차 전직 안함"
      )}
    </>
  );
}
export default MemberHexa;
