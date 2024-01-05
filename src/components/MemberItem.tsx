import React from "react";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";
import { IEquipment, ISymbol } from "../interfaces";
import { useQuery } from "react-query";
import { getEquipment, getSymbol } from "../api";
import { cls, optionCalc, optionFormat } from "../Utils";

function MemberItem() {
  //Recoil State
  const [ocid] = useRecoilState(ocidState);
  //클릭한 캐릭터의 장착한 장비 조회
  const { data: equipmentData } = useQuery<IEquipment>(
    ["your_eqiupment", ocid],
    () => getEquipment(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  //클릭한 캐릭터의 장착 심볼 조회
  const { isLoading, data: sybolData } = useQuery<ISymbol>(
    ["your_symbol", ocid],
    () => getSymbol(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  return (
    <>
      {!isLoading ? (
        <>
          {ocid ? (
            <div className="w-full overflow-y-scroll py-5 px-8 grid lg:grid-cols-3 grid-cols-1 gap-4">
              {equipmentData?.item_equipment.map((data, number) => (
                <div
                  className="border border-gray-300 rounded-md bg-white text-xs flex flex-col justify-center items-start"
                  key={number}
                >
                  <div className="flex justify-start items-center p-3 min-h-[68px]">
                    <div className="flex justify-start items-center gap-3">
                      <img src={data.item_icon} alt="" className="w-7" />
                      <div>
                        <p className="text-gray-600 text-[0.6rem]">
                          {data.item_equipment_slot}
                        </p>
                        <p>{data.item_name}</p>
                        {Number(data.starforce) ? (
                          <div className="text-yellow-500 flex justify-start items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="1"
                              stroke="none"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                            <p>{data.starforce}</p>
                          </div>
                        ) : null}
                      </div>
                      {Number(data.item_add_option.str) + //추가옵션이 있는 아이템인지 아닌지
                        Number(data.item_add_option.dex) +
                        Number(data.item_add_option.int) +
                        Number(data.item_add_option.luk) +
                        Number(data.item_add_option.all_stat) +
                        Number(data.item_add_option.attack_power) +
                        Number(data.item_add_option.magic_power) +
                        Number(data.item_add_option.damage) +
                        Number(data.item_add_option.boss_damage) !==
                      0 ? (
                        <span className="bg-pink-200 px-2 rounded-full text-[0.6rem]">
                          {optionCalc(
                            equipmentData.character_class,
                            data.item_equipment_slot,
                            data.item_add_option.str,
                            data.item_add_option.dex,
                            data.item_add_option.int,
                            data.item_add_option.luk,
                            data.item_add_option.all_stat,
                            data.item_add_option.attack_power,
                            data.item_add_option.magic_power,
                            data.item_add_option.damage,
                            data.item_add_option.boss_damage,
                            data.item_add_option.max_hp
                          )}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {data.potential_option_1 ? (
                    <div className="h-1/2 border-t border-gray-300 w-full grid grid-cols-2">
                      <div className="flex justify-center items-center gap-5 p-2 border-r border-gray-300">
                        <h1 className="text-[0.7rem] text-gray-500">잠재</h1>
                        <div
                          className={cls(
                            data.potential_option_grade === "레전드리"
                              ? "text-green-500"
                              : data.potential_option_grade === "유니크"
                              ? "text-yellow-500"
                              : data.potential_option_grade === "에픽"
                              ? "text-purple-500"
                              : data.potential_option_grade === "레어"
                              ? "text-blue-500"
                              : "",
                            "text-[0.6rem]"
                          )}
                        >
                          <p>{optionFormat(data.potential_option_1)}</p>
                          <p>{optionFormat(data.potential_option_2)}</p>
                          <p>{optionFormat(data.potential_option_3)}</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-5 p-2">
                        {data.additional_potential_option_1 ? (
                          <>
                            <h1 className="text-[0.7rem] text-gray-500">
                              에디
                            </h1>
                            <div
                              className={cls(
                                data.additional_potential_option_grade ===
                                  "레전드리"
                                  ? "text-green-500"
                                  : data.additional_potential_option_grade ===
                                    "유니크"
                                  ? "text-yellow-500"
                                  : data.additional_potential_option_grade ===
                                    "에픽"
                                  ? "text-purple-500"
                                  : data.additional_potential_option_grade ===
                                    "레어"
                                  ? "text-blue-500"
                                  : "",
                                "text-[0.6rem]"
                              )}
                            >
                              <p>
                                {optionFormat(
                                  data.additional_potential_option_1
                                )}
                              </p>
                              <p>
                                {optionFormat(
                                  data.additional_potential_option_2
                                )}
                              </p>
                              <p>
                                {optionFormat(
                                  data.additional_potential_option_3
                                )}
                              </p>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
              {equipmentData?.title !== null ? (
                <div className="border border-gray-300 rounded-md bg-white text-xs p-3 flex justify-start items-center">
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={equipmentData?.title.title_icon}
                      alt=""
                      className="w-7"
                    />
                    <div>
                      <p className="text-gray-600 text-[0.6rem]">칭호</p>
                      <p>{equipmentData?.title.title_name}</p>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="w-full lg:col-span-3 grid lg:grid-cols-2 grid-cols-1 gap-4 text-[0.6rem] text-gray-600 ">
                <div className="bg-white border border-gray-300 rounded-md grid lg:grid-cols-6 grid-cols-3 gap-2 p-3">
                  <h1 className="lg:col-span-6 col-span-3">아케인심볼</h1>
                  {sybolData?.symbol.slice(0, 6).map((data, number) => (
                    <>
                      <div
                        key={number}
                        className="flex flex-col justify-center items-center gap-2"
                      >
                        <img src={data.symbol_icon} alt="" className="w-10" />
                        <p className="bg-blue-100 px-2 py-1 rounded-full text-black">
                          Lv.{data.symbol_level}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
                <div className="bg-white border border-gray-300 rounded-md grid lg:grid-cols-6 grid-cols-3 gap-2 p-3">
                  <h1 className="lg:col-span-6 col-span-3">어센틱심볼</h1>
                  {sybolData?.symbol.slice(6, 12).map((data, number) => (
                    <>
                      <div
                        key={number}
                        className="flex flex-col justify-center items-center gap-2"
                      >
                        <img src={data.symbol_icon} alt="" className="w-10" />
                        <p className="bg-purple-100 px-2 py-1 rounded-full text-black">
                          Lv.{data.symbol_level}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <img src="/loading.gif" alt="" className="w-[20vw]" />
        </div>
      )}
    </>
  );
}
export default MemberItem;
