//캐릭터 ocid
export interface IOcid {
  ocid: string;
}
//캐릭터 기본 정보
export interface IMemberBasic {
  world_name: string;
  character_name: string;
  character_level: number;
  character_gender: string;
  character_exp_rate: string;
  character_class: string;
  character_image: string;
  character_guild_name: string;
}
//종합 스탯
export interface IStat {
  character_class: string;
  date: string;
  final_stat: IfinalStat[];
  remain_ap: string;
}
interface IfinalStat {
  stat_name: string;
  stat_value: number;
}
//어빌리티
export interface IAbility {
  ability_grade: string;
  ability_info: {
    ability_no: number;
    ability_grade: string;
    ability_value: string;
  }[];
}
//무릉도장
export interface IDojang {
  dojang_best_floor: number;
  date_dojang_record: string | null;
  dojang_best_time: number;
}
//유니온
export interface IUnion {
  date: string;
  union_level: number;
  union_grade: string;
}
//장착 장비
export interface IEquipment {
  date: string;
  character_gender: string;
  character_class: string;
  item_equipment: [
    {
      item_equipment_part: string;
      item_equipment_slot: string;
      item_name: string;
      item_icon: string;
      item_description: string;
      item_shape_name: string;
      item_shape_icon: string;
      gender: string;
      item_total_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        ignore_monster_armor: string;
        all_stat: string;
        damage: string;
        equipment_level_decrease: number;
        max_hp_rate: string;
        max_mp_rate: string;
      };
      item_base_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        ignore_monster_armor: string;
        all_stat: string;
        max_hp_rate: string;
        max_mp_rate: string;
        base_equipment_level: number;
      };
      potential_option_grade: string;
      additional_potential_option_grade: string;
      potential_option_1: string;
      potential_option_2: string;
      potential_option_3: string;
      additional_potential_option_1: string;
      additional_potential_option_2: string;
      additional_potential_option_3: string;
      equipment_level_increase: number;
      item_exceptional_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
      };
      item_add_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        damage: string;
        all_stat: string;
        equipment_level_decrease: number;
      };
      growth_exp: number;
      growth_level: number;
      scroll_upgrade: string;
      cuttable_count: string;
      golden_hammer_flag: string;
      scroll_resilience_count: string;
      scroll_upgradeable_count: string;
      soul_name: string;
      soul_option: string;
      item_etc_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
      };
      starforce: string;
      starforce_scroll_flag: string;
      item_starforce_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
      };
      special_ring_level: number;
      date_expire: string;
    }
  ];
  title: {
    title_name: string;
    title_icon: string;
    title_description: string;
    date_expire: string;
    date_option_expire: string;
  };
  dragon_equipment: [
    {
      item_equipment_part: string;
      equipment_slot: string;
      item_name: string;
      item_icon: string;
      item_description: string;
      item_shape_name: string;
      item_shape_icon: string;
      gender: string;
      item_total_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        ignore_monster_armor: string;
        all_stat: string;
        damage: string;
        equipment_level_decrease: number;
        max_hp_rate: string;
        max_mp_rate: string;
      };
      item_base_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        ignore_monster_armor: string;
        all_stat: string;
        max_hp_rate: string;
        max_mp_rate: string;
        base_equipment_level: number;
      };
      equipment_level_increase: number;
      item_exceptional_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
      };
      item_add_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        damage: string;
        all_stat: string;
        equipment_level_decrease: number;
      };
      growth_exp: number;
      growth_level: number;
      scroll_upgrade: string;
      cuttable_count: string;
      golden_hammer_flag: string;
      scroll_resilience_count: string;
      scroll_upgradeable_count: string;
      soul_name: string;
      soul_option: string;
      item_etc_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
      };
      starforce: string;
      starforce_scroll_flag: string;
      item_starforce_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
      };
      special_ring_level: number;
      date_expire: string;
    }
  ];
  mechanic_equipment: [
    {
      item_equipment_part: string;
      equipment_slot: string;
      item_name: string;
      item_icon: string;
      item_description: string;
      item_shape_name: string;
      item_shape_icon: string;
      gender: string;
      item_total_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        ignore_monster_armor: string;
        all_stat: string;
        damage: string;
        equipment_level_decrease: number;
        max_hp_rate: string;
        max_mp_rate: string;
      };
      item_base_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        ignore_monster_armor: string;
        all_stat: string;
        max_hp_rate: string;
        max_mp_rate: string;
        base_equipment_level: number;
      };
      equipment_level_increase: number;
      item_exceptional_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
      };
      item_add_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
        boss_damage: string;
        damage: string;
        all_stat: string;
        equipment_level_decrease: number;
      };
      growth_exp: number;
      growth_level: number;
      scroll_upgrade: string;
      cuttable_count: string;
      golden_hammer_flag: string;
      scroll_resilience_count: string;
      scroll_upgradeable_count: string;
      soul_name: string;
      soul_option: string;
      item_etc_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
      };
      starforce: number;
      starforce_scroll_flag: string;
      item_starforce_option: {
        str: string;
        dex: string;
        int: string;
        luk: string;
        max_hp: string;
        max_mp: string;
        attack_power: string;
        magic_power: string;
        armor: string;
        speed: string;
        jump: string;
      };
      special_ring_level: number;
      date_expire: string;
    }
  ];
}
//장착 심볼
export interface ISymbol {
  date: string;
  character_class: string;
  symbol: ISybolList[];
}
interface ISybolList {
  symbol_name: string;
  symbol_icon: string;
  symbol_description: string;
  symbol_force: number;
  symbol_level: number;
  symbol_str: number;
  symbol_dex: number;
  symbol_int: number;
  symbol_luk: number;
  symbol_hp: number;
  symbol_growth_count: number;
  symbol_require_growth_count: number;
}
//장착 캐시 장비
export interface ICash {
  preset_no: number;
  cash_item_equipment_base: ICashItems[];
  cash_item_equipment_preset_1: ICashItems[];
  cash_item_equipment_preset_2: ICashItems[];
  cash_item_equipment_preset_3: ICashItems[];
}
interface ICashItems {
  cash_item_equipment_part: string;
  cash_item_equipment_slot: string;
  cash_item_name: string;
  cash_item_icon: string;
  cash_item_description: string;
  cash_item_option: [];
  date_expire: string;
  date_option_expire: string;
  cash_item_label: string;
  cash_item_coloring_prism: string;
  base_preset_item_disable_flag: number;
}
//장착 헤어, 성형, 피부
export interface IBeauty {
  character_hair: {
    hair_name: string;
    base_color: string;
    mix_color: string; //null
    mix_rate: number; //0
  };
  character_face: {
    face_name: string;
    base_color: string;
    mix_color: string; //null
    mix_rate: string; //0
  };
  character_skin_name: string;
}
//6차 스킬
export interface IHexa {
  character_skill_grade: string;
  character_skill: {
    skill_name: string;
    skill_description: string;
    skill_level: number;
    skill_effect: string;
    skill_icon: string;
  }[];
}
//Hexa스탯
export interface IHexaStat {
  character_class: string;
  character_hexa_stat_core: {
    slot_id: number;
    main_stat_name: string;
    sub_stat_name_1: string;
    sub_stat_name_2: string;
    main_stat_level: number;
    sub_stat_level_1: number;
    sub_stat_level_2: number;
    stat_grade: number;
  }[];
}
