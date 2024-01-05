//Tailwind CSS에서 배열 형태로 스타일을 넣을 수 있게
export const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};
//직업 별 주스탯을 강조하여 표시하기 위함
export const myFirstStat = (job?: string) => {
  switch (job) {
    case "히어로":
    case "팔라딘":
    case "다크나이트":
    case "아란":
    case "소울마스터":
    case "미하일":
    case "블래스터":
    case "데몬슬레이어":
    case "카이저":
    case "아델":
    case "제로":
    case "바이퍼":
    case "캐논마스터":
    case "스트라이커":
    case "은월":
    case "아크":
      return "STR";
    case "보우마스터":
    case "신궁":
    case "패스파인더":
    case "메르세데스":
    case "윈드브레이커":
    case "와일드헌터":
    case "메카닉":
    case "캡틴":
    case "엔젤릭버스터":
      return "DEX";
    case "아크메이지(썬,콜)":
    case "아크메이지(불,독)":
    case "비숍":
    case "플레임위자드":
    case "에반":
    case "루미너스":
    case "배틀메이지":
    case "키네시스":
    case "일리움":
    case "라라":
      return "INT";
    case "나이트로드":
    case "섀도어":
    case "듀얼블레이더":
    case "팬텀":
    case "나이트워커":
    case "카데나":
    case "호영":
    case "칼리":
      return "LUK";
    case "데몬어벤져":
      return "HP";
    case "제논":
      return "LUK"; // &&"STR"&&"DEX"
  }
};
//잠재옵션 내용이 너무 긴 옵션은 글자를 줄이도록 포맷
export const optionFormat = (option: string) => {
  switch (option) {
    case "모든 스킬의 재사용 대기시간 : -2초(10초 이하는 10%감소, 5초 미만으로 감소 불가)":
      return "쿨감 -2초";
    case "모든 스킬의 재사용 대기시간 : -1초(10초 이하는 10%감소, 5초 미만으로 감소 불가)":
      return "쿨감 -1초";
    case "보스 몬스터 공격 시 데미지 : +40%":
      return "보공 +40%";
    case "보스 몬스터 공격 시 데미지 : +35%":
      return "보공 +35%";
    case "보스 몬스터 공격 시 데미지 : +30%":
      return "보공 +30%";
    case "보스 몬스터 공격 시 데미지 : +20%":
      return "보공 +20%";
    case "보스 몬스터 공격 시 데미지 : +12%":
      return "보공 +12%";
    case "몬스터 방어율 무시 : +40%":
      return "방무 +40%";
    case "몬스터 방어율 무시 : +35%":
      return "방무 +35%";
    case "몬스터 방어율 무시 : +30%":
      return "방무 +30%";
    case "몬스터 방어율 무시 : +15%":
      return "방무 +15%";
    case "공격력 : +12%":
      return "공격력 +12%";
    case "공격력 : +9%":
      return "공격력 +9%";
    case "공격력 : +6%":
      return "공격력 +6%";
    case "공격력 : +3%":
      return "공격력 +3%";
    case "공격력 : +16":
      return "공격력 +16";
    case "공격력 : +14":
      return "공격력 +14";
    case "공격력 : +11":
      return "공격력 +11";
    case "공격력 : +10":
      return "공격력 +10";
    case "마력 : +12%":
      return "마력 +12%";
    case "마력 : +9%":
      return "마력 +9%";
    case "마력 : +6%":
      return "마력 +6%";
    case "마력 : +3%":
      return "마력 +3%";
    case "마력 : +16":
      return "마력 +16";
    case "마력 : +14":
      return "마력 +14";
    case "마력 : +11":
      return "마력 +11";
    case "마력 : +10":
      return "마력 +10";
    case "최대 HP : +13%":
      return "HP +13%";
    case "최대 HP : +12%":
      return "HP +12%";
    case "최대 HP : +11%":
      return "HP +11%";
    case "최대 HP : +10%":
      return "HP +10%";
    case "최대 HP : +9%":
      return "HP +9%";
    case "최대 HP : +8%":
      return "HP +8%";
    case "최대 HP : +7%":
      return "HP +7%";
    case "최대 HP : +6%":
      return "HP +6%";
    case "최대 HP : +5%":
      return "HP +5%";
    case "최대 HP : +4%":
      return "HP +4%";
    // case "최대 MP : +13%":
    //   return "MP +13%";
    // case "최대 MP : +12%":
    //   return "MP +12%";
    // case "최대 MP : +11%":
    //   return "MP +11%";
    // case "최대 MP : +10%":
    //   return "MP +10%";
    // case "최대 MP : +9%":
    //   return "MP +9%";
    // case "최대 MP : +8%":
    //   return "MP +8%";
    // case "최대 MP : +7%":
    //   return "MP +7%";
    // case "최대 MP : +6%":
    //   return "MP +6%";
    // case "최대 MP : +5%":
    //   return "MP +5%";
    // case "최대 MP : +4%":
    //   return "MP +4%";
    case "STR : +13%":
      return "STR +13%";
    case "STR : +12%":
      return "STR +12%";
    case "STR : +11%":
      return "STR +11%";
    case "STR : +10%":
      return "STR +10%";
    case "STR : +9%":
      return "STR +9%";
    case "STR : +8%":
      return "STR +8%";
    case "STR : +7%":
      return "STR +7%";
    case "STR : +6%":
      return "STR +6%";
    case "STR : +5%":
      return "STR +5%";
    case "STR : +4%":
      return "STR +4%";
    case "STR : +3%":
      return "STR +3%";
    case "STR : +2%":
      return "STR +2%";
    case "DEX : +13%":
      return "DEX +13%";
    case "DEX : +12%":
      return "DEX +12%";
    case "DEX : +11%":
      return "DEX +11%";
    case "DEX : +10%":
      return "DEX +10%";
    case "DEX : +9%":
      return "DEX +9%";
    case "DEX : +8%":
      return "DEX +8%";
    case "DEX : +7%":
      return "DEX +7%";
    case "DEX : +6%":
      return "DEX +6%";
    case "DEX : +5%":
      return "DEX +5%";
    case "DEX : +4%":
      return "DEX +4%";
    case "DEX : +3%":
      return "DEX +3%";
    case "DEX : +2%":
      return "DEX +2%";
    case "INT : +13%":
      return "INT +13%";
    case "INT : +12%":
      return "INT +12%";
    case "INT : +11%":
      return "INT +11%";
    case "INT : +10%":
      return "INT +10%";
    case "INT : +9%":
      return "INT +9%";
    case "INT : +8%":
      return "INT +8%";
    case "INT : +7%":
      return "INT +7%";
    case "INT : +6%":
      return "INT +6%";
    case "INT : +5%":
      return "INT +5%";
    case "INT : +4%":
      return "INT +4%";
    case "INT : +3%":
      return "INT +3%";
    case "INT : +2%":
      return "INT +2%";
    case "LUK : +13%":
      return "LUK +13%";
    case "LUK : +12%":
      return "LUK +12%";
    case "LUK : +11%":
      return "LUK +11%";
    case "LUK : +10%":
      return "LUK +10%";
    case "LUK : +9%":
      return "LUK +9%";
    case "LUK : +8%":
      return "LUK +8%";
    case "LUK : +7%":
      return "LUK +7%";
    case "LUK : +6%":
      return "LUK +6%";
    case "LUK : +5%":
      return "LUK +5%";
    case "LUK : +4%":
      return "LUK +4%";
    case "LUK : +3%":
      return "LUK +3%";
    case "LUK : +2%":
      return "LUK +2%";
    case "올스탯 : +10%":
      return "올스탯 +10%";
    case "올스탯 : +9%":
      return "올스탯 +9%";
    case "올스탯 : +8%":
      return "올스탯 +8%";
    case "올스탯 : +7%":
      return "올스탯 +7%";
    case "올스탯 : +6%":
      return "올스탯 +6%";
    case "올스탯 : +5%":
      return "올스탯 +5%";
    case "올스탯 : +4%":
      return "올스탯 +4%";
    case "올스탯 : +3%":
      return "올스탯 +3%";
    case "올스탯 : +2%":
      return "올스탯 +2%";
    case "캐릭터 기준 9레벨 당 STR : +2":
      return "9렙당 STR+2";
    case "캐릭터 기준 9레벨 당 STR : +1":
      return "9렙당 STR+1";
    case "캐릭터 기준 9레벨 당 DEX : +2":
      return "9렙당 DEX+2";
    case "캐릭터 기준 9레벨 당 DEX : +1":
      return "9렙당 DEX+1";
    case "캐릭터 기준 9레벨 당 INT : +2":
      return "9렙당 INT+2";
    case "캐릭터 기준 9레벨 당 INT : +1":
      return "9렙당 INT+1";
    case "캐릭터 기준 9레벨 당 LUK : +2":
      return "9렙당 LUK+2";
    case "캐릭터 기준 9레벨 당 LUK : +1":
      return "9렙당 LUK+1";
    case "크리티컬 데미지 : +8%":
      return "크뎀 +8%";
    case "크리티컬 데미지 : +3%":
      return "크뎀 +3%";
    case "크리티컬 데미지 : +1%":
      return "크뎀 +1%";
    case "아이템 드롭률 : +20%":
      return "드롭 +20%";
    case "메소 획득량 : +20%":
      return "메획 +20%";
    default:
      return "";
  }
};
//추가옵션 등급 계산
export const optionCalc = (
  job: string, //직업
  slot: string, //파츠종류
  str: string, //힘,덱,인,럭,올
  dex: string,
  int: string,
  luk: string,
  all: string,
  atk: string, //공,마
  mag: string,
  dmg: string, //뎀, 보뎀
  boss: string,
  hp: string
) => {
  if (slot === "무기") {
    switch (job) {
      case "아크메이지(썬,콜)":
      case "아크메이지(불,독)":
      case "비숍":
      case "플레임위자드":
      case "에반":
      case "루미너스":
      case "배틀메이지":
      case "키네시스":
      case "일리움":
      case "라라":
        return "마력 +" + mag; //마법사 직업일 경우
      default:
        return "공격력 +" + atk;
    }
  } else {
    switch (job) {
      case "히어로":
      case "팔라딘":
      case "다크나이트":
      case "아란":
      case "소울마스터":
      case "미하일":
      case "블래스터":
      case "데몬슬레이어":
      case "카이저":
      case "아델":
      case "제로":
      case "바이퍼":
      case "캐논마스터":
      case "스트라이커":
      case "은월":
      case "아크":
        return Number(str) + Number(all) * 10 + Number(atk) * 4 + "급"; //STR
      case "보우마스터":
      case "신궁":
      case "패스파인더":
      case "메르세데스":
      case "윈드브레이커":
      case "와일드헌터":
      case "메카닉":
      case "캡틴":
      case "엔젤릭버스터":
        return Number(dex) + Number(all) * 10 + Number(atk) * 4 + "급"; //DEX
      case "아크메이지(썬,콜)":
      case "아크메이지(불,독)":
      case "비숍":
      case "플레임위자드":
      case "에반":
      case "루미너스":
      case "배틀메이지":
      case "키네시스":
      case "일리움":
      case "라라":
        return Number(int) + Number(all) * 10 + Number(mag) * 4 + "급"; //INT
      case "나이트로드":
      case "섀도어":
      case "듀얼블레이더":
      case "팬텀":
      case "나이트워커":
      case "카데나":
      case "호영":
      case "칼리":
        return Number(luk) + Number(all) * 10 + Number(atk) * 4 + "급"; //LUK
      case "데몬어벤져":
        return "HP +" + hp; //HP
      case "제논":
        return (
          (Number(str) +
            Number(dex) +
            Number(luk) +
            Number(atk) * 5 +
            Number(all) * 20) /
            2 +
          "급"
        ); //All Stat
    }
  }
};
//Hexa 스탯 레벨 계산
export const hexaStatLevel = (
  job?: string,
  index?: string,
  statName?: string,
  statLevel?: number
) => {
  if (index === "main") {
    switch (statName) {
      case "크리티컬 데미지 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
            return (statLevel * 0.35).toFixed(2) + "%";
          case 5:
            return "2.1%";
          case 6:
            return "2.8%";
          case 7:
            return "3.5%";
          case 8:
            return "4.55%";
          case 9:
            return "5.6%";
          case 10:
            return "7%";
          default:
            return "";
        }
      case "보스 데미지 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
            return statLevel + "%";
          case 5:
            return "6%";
          case 6:
            return "8%";
          case 7:
            return "10%";
          case 8:
            return "13%";
          case 9:
            return "16%";
          case 10:
            return "20%";
          default:
            return "";
        }
      case "방어율 무시 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
            return statLevel + "%";
          case 5:
            return "6%";
          case 6:
            return "8%";
          case 7:
            return "10%";
          case 8:
            return "13%";
          case 9:
            return "16%";
          case 10:
            return "20%";
          default:
            return "";
        }
      case "데미지 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
            return (statLevel * 0.75).toFixed(2) + "%";
          case 5:
            return "4.5%";
          case 6:
            return "6%";
          case 7:
            return "7.5%";
          case 8:
            return "9.75%";
          case 9:
            return "12%";
          case 10:
            return "15%";
          default:
            return "";
        }
      case "공격력 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
            return statLevel * 5;
          case 5:
            return 30;
          case 6:
            return 40;
          case 7:
            return 50;
          case 8:
            return 65;
          case 9:
            return 80;
          case 10:
            return 100;
          default:
            return "";
        }
      case "마력 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
            return statLevel * 5;
          case 5:
            return 30;
          case 6:
            return 40;
          case 7:
            return 50;
          case 8:
            return 65;
          case 9:
            return 80;
          case 10:
            return 100;
          default:
            return "";
        }
      case "주력 스탯 증가":
        switch (job) {
          case "데몬어벤져":
            switch (statLevel) {
              case 1:
              case 2:
              case 3:
              case 4:
                return (statLevel * 2100).toLocaleString();
              case 5:
                return (12600).toLocaleString();
              case 6:
                return(16800).toLocaleString();
              case 7:
                return (21000).toLocaleString();
              case 8:
                return (27300).toLocaleString();
              case 9:
                return (33600).toLocaleString();
              case 10:
                return (42000).toLocaleString();
              default:
                return "";
            }
          case "제논":
            switch (statLevel) {
              case 1:
              case 2:
              case 3:
              case 4:
                return statLevel * 48;
              case 5:
                return 288;
              case 6:
                return 384;
              case 7:
                return 480;
              case 8:
                return 624;
              case 9:
                return 768;
              case 10:
                return 960;
              default:
                return "";
            }
          default:
            switch (statLevel) {
              case 1:
              case 2:
              case 3:
              case 4:
                return statLevel * 100;
              case 5:
                return 600;
              case 6:
                return 800;
              case 7:
                return (1000).toLocaleString();
              case 8:
                return (1300).toLocaleString();
              case 9:
                return (1600).toLocaleString();
              case 10:
                return (2000).toLocaleString();
              default:
                return "";
            }
        }
    }
  } else {
    switch (statName) {
      case "크리티컬 데미지 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return (statLevel * 0.35).toFixed(2) + "%";
          default:
            return "";
        }
      case "보스 데미지 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return statLevel + "%";
          default:
            return "";
        }
      case "방어율 무시 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return statLevel + "%";
          default:
            return "";
        }
      case "데미지 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return (statLevel * 0.75).toFixed + "%";
          default:
            return "";
        }
      case "공격력 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return statLevel * 5;
          default:
            return "";
        }
      case "마력 증가":
        switch (statLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return statLevel * 5;
          default:
            return "";
        }
      case "주력 스탯 증가":
        switch (job) {
          case "데몬어벤져":
            switch (statLevel) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
                return (statLevel * 2100).toLocaleString();
              default:
                return "";
            }
          case "제논":
            switch (statLevel) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
                return statLevel * 48;
              default:
                return "";
            }
          default:
            switch (statLevel) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
                return (statLevel * 100).toLocaleString();
              default:
                return "";
            }
        }
    }
  }
};
