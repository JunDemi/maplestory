const BASE_URL = "https://open.api.nexon.com/maplestory/v1";
const API_KEY = String(process.env.REACT_APP_API_KEY);

//캐릭터 식별자(ocid)
export const getOCID = (name?: string) => {
  return fetch(`${BASE_URL}/id?character_name=${name}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) { throw new Error("유효하지 않은 닉네임") }
      return response.json();
    })
    .catch((error) => console.log(error));
};
//캐릭터 기본 정보
export const getBasic = (ocid?: string) => {
  return fetch(`${BASE_URL}/character/basic?ocid=${ocid}&date=2023-12-21`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
  .then((response) => {
    if (!response.ok) { throw new Error("유효하지 않은 닉네임") }
    return response.json();
  })
  .catch((error) => console.log(error));
};
//인기도 정보
//종합 능력치 정보
//하이퍼 스탯 정보
//성향 정보
//어빌리티 정보
//장착 장비 정보
//장착 심볼 정보
//장착 안드로이드 정보
//장착 펫 정보
//적용 세트 효과 정보
//장착 캐시 정보
//헤어, 성형, 피부 정보
//장착 스킬 정보
//장착 링크 스킬 정보
//5차 스킬 정보
//6차 스킬 정보
//무릉도장 정보
