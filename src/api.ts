const BASE_URL = "https://open.api.nexon.com/maplestory/v1";
const API_KEY = String(process.env.REACT_APP_API_KEY);
export const guildID = "c00548e2d4a1c249dc389675247f5a3b";

//어제의 날짜 출력
const getYesterday = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
const now = new Date();
//0시에서 10시 사이일 경우, 이틀 전으로 출력
const isEarlyMorning = now.getHours() >= 0 && now.getHours() < 10;
const daysAgo = isEarlyMorning ? 2 : 1;
const targetDate = new Date(now);
targetDate.setDate(now.getDate() - daysAgo);
export const yesterday = getYesterday(targetDate);

//캐릭터 식별자(ocid)
export const getOCID = async(name?: string) => {
  return await fetch(`${BASE_URL}/id?character_name=${name}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) { return null }
      return response.json();
    })
    .catch((error) => console.log(error));
};
//캐릭터 기본 정보
export const getBasic = async(ocid?: string) => {
  return await fetch(`${BASE_URL}/character/basic?ocid=${ocid}&date=${yesterday}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
  .then((response) => {
    if (!response.ok) { return {charater_name: "불러오기 실패"} }
    return response.json();
  })
  .catch((error) => console.log(error));
};
//인기도 정보
export const getPop = async(ocid?: string) => {
  return await fetch(`${BASE_URL}//character/popularity?ocid=${ocid}&date=${yesterday}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) { return null }
      return response.json();
    })
    .catch((error) => console.log(error));
};
//종합 능력치 정보
export const getStat = async(ocid?: string) => {
  return await fetch(`${BASE_URL}/character/stat?ocid=${ocid}&date=${yesterday}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
  .then((response) => {
    if (!response.ok) { return null }
    return response.json();
  })
  .catch((error) => console.log(error));
};
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
//길드 정보
export const getGuildBasic = async() => {
  return await fetch(`${BASE_URL}/guild/basic?oguild_id=${guildID}&date=${yesterday}`, {
    headers: {
      "x-nxopen-api-key": API_KEY,
    },
  })
  .then((response) => {
    if (!response.ok) { throw new Error("유효하지 않은 길드 이름") }
    return response.json();
  })
  .catch((error) => console.log(error));
};