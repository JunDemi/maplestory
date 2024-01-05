import React from "react";
import { useRecoilState } from "recoil";
import { ocidState } from "../atom";

function MemberCash() {
  //Recoil State
  const [ocid] = useRecoilState(ocidState);
  //클릭한 캐릭터의 장착 캐시아이템 조회
  // const { data: equipmentData } = useQuery<IEquipment>(
  //   ["your_eqiupment", ocid],
  //   () => getEquipment(ocid),
  //   {
  //     staleTime: Infinity,
  //     enabled: !!ocid,
  //   }
  // );
  return (
    <>
      <div>Cash</div>
    </>
  );
}
export default MemberCash;
