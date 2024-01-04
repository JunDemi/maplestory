import React from "react";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";
import { IEquipment } from "../interfaces";
import { useQuery } from "react-query";
import { getEquipment } from "../api";

function MemberItem() {
  const [ocid] = useRecoilState(ocidState);
  const { data: equipmentData } = useQuery<IEquipment>(
    ["your_eqiupment", ocid],
    () => getEquipment(ocid),
    {
      staleTime: Infinity,
      enabled: !!ocid,
    }
  );
    return (
        <>
        {ocid ? 
         <div className="w-full overflow-y-scroll py-5 px-8 font-bold grid lg:grid-cols-4 grid-cols-2 gap-4">
          {equipmentData?.item_equipment.map((data, number)=> (
            <div className="border border-black text-xs"  key={number}>
              <p>{data.item_equipment_part}</p>
              <p>{data.item_name}</p>
              <img src={data.item_icon} alt="" className="w-6"/>
            </div>
          ))}
          <div className="border border-black text-xs">
            <p>칭호</p>
            <p>{equipmentData?.title.title_name}</p>
            <img src={equipmentData?.title.title_icon} alt="" className="w-6"/>
          </div>
        </div>
        : null}
        </>
      );
}
export default MemberItem;