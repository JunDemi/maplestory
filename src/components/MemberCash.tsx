import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";
import { useQuery } from "react-query";
import { IBeauty, ICash } from "../interfaces";
import { getBeauty, getCash } from "../api";
import LoadingGIF from "./LoadingGIF";

function MemberCash() {
  //Recoil State
  const [ocid] = useRecoilState(ocidState);
  //클릭한 캐릭터의 장착 캐시아이템 조회
  const { data: cashData } = useQuery<ICash>(
    ["your_cash", ocid],
    () => getCash(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  //클릭한 캐릭터의 헤어, 성형, 피부 조회
  const { isLoading, data: beautyData } = useQuery<IBeauty>(
    ["your_beauty", ocid],
    () => getBeauty(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
  //캐시장비 적용 프리셋 산출 
  const cashPreset = [];
  if(cashData?.preset_no === 1) {
    switch(cashData.cash_item_equipment_preset_1.length){
      case 0:
        cashPreset.push(cashData.cash_item_equipment_base);
        break;
      default:
        cashPreset.push(cashData.cash_item_equipment_preset_1);
        break;
    }
  }else if(cashData?.preset_no === 2){
    switch(cashData.cash_item_equipment_preset_2.length){
      case 0:
        cashPreset.push(cashData.cash_item_equipment_base);
        break;
      default:
        cashPreset.push(cashData.cash_item_equipment_preset_2);
        break;
    }
  }else if(cashData?.preset_no === 3){
    switch(cashData.cash_item_equipment_preset_3.length){
      case 0:
        cashPreset.push(cashData.cash_item_equipment_base);
        break;
      default:
        cashPreset.push(cashData.cash_item_equipment_preset_3);
        break;
    }
  }
  return (
    <>
      {!isLoading ? (
        <>
          {ocid ? (
            <div className="w-full overflow-y-scroll py-5 px-8 grid lg:grid-cols-3 grid-cols-1 gap-4">
              <div className="border border-gray-300 rounded-md bg-white text-xs flex justify-start items-center">
                <div className="flex justify-start items-center p-3">
                  <div className="flex justify-start items-center gap-3">
                    <img
                      src="https://cdn.dak.gg/maple/images/analysis/hair-icon.png"
                      className="w-7"
                      alt=""
                    />
                    <div>
                      <p className="text-gray-600 text-[0.6rem]">헤어</p>
                      <div className="flex justify-start items-center gap-3">
                        <p>{beautyData?.character_hair.hair_name}</p>
                        <span className="bg-yellow-300 px-2 rounded-full text-[0.6rem] tracking-wider">
                          {beautyData?.character_hair.mix_color === null //믹스염색 수치표 계산, 색 이름 첫글자만 따오기
                            ? ""
                            : beautyData?.character_hair.base_color.substring(
                                0,
                                1
                              ) +
                              "" +
                              beautyData?.character_hair.mix_color.substring(
                                0,
                                1
                              ) +
                              " " +
                              beautyData?.character_hair.mix_rate +
                              "/" +
                              (100 -
                                Number(beautyData?.character_hair.mix_rate))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-md bg-white text-xs flex justify-start items-center">
                <div className="flex justify-start items-center p-3">
                  <div className="flex justify-start items-center gap-3">
                    <img
                      src="https://cdn.dak.gg/maple/images/analysis/face-icon.png"
                      className="w-7"
                      alt=""
                    />
                    <div>
                      <p className="text-gray-600 text-[0.6rem]">성형</p>
                      <div className="flex justify-start items-center gap-3">
                        <p>{beautyData?.character_face.face_name}</p>
                        <span className="bg-yellow-300 px-2 rounded-full text-[0.6rem] tracking-wider">
                          {beautyData?.character_face.mix_color === null //믹스염색 수치표 계산
                            ? beautyData.character_face.base_color
                            : beautyData?.character_face.base_color.substring(
                                0,
                                1
                              ) +
                              "" +
                              beautyData?.character_face.mix_color.substring(
                                0,
                                1
                              ) +
                              " " +
                              beautyData?.character_face.mix_rate +
                              "/" +
                              (100 -
                                Number(beautyData?.character_face.mix_rate))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-md bg-white text-xs flex justify-start items-center">
                <div className="flex justify-start items-center p-3">
                  <div className="flex justify-start items-center gap-3">
                    <img
                      src="https://cdn.dak.gg/maple/images/analysis/face-icon.png"
                      className="w-7"
                      alt=""
                    />
                    <div>
                      <p className="text-gray-600 text-[0.6rem]">피부</p>
                      <p>{beautyData?.character_skin_name}</p>
                    </div>
                  </div>
                </div>
              </div>
              {cashPreset[0]?.map((data, number) => (
                <>
                  <div
                    className="border border-gray-300 rounded-md bg-white text-xs flex flex-col justify-center items-start"
                    key={number}
                  >
                    <div className="flex justify-start items-center p-3">
                      <div className="flex justify-start items-center gap-3">
                        <img src={data.cash_item_icon} alt="" className="w-7" />
                        <div>
                          <p className="text-gray-600 text-[0.6rem]">
                            {data.cash_item_equipment_part}
                          </p>
                          <p>{data.cash_item_name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <LoadingGIF />
      )}
    </>
  );
}
export default MemberCash;
