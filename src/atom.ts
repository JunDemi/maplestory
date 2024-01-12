import { RecoilState, atom } from "recoil";

export const ocidState:RecoilState<string> = atom({
    key: "selected_ocid",
    default: ""
});
export const refState:RecoilState<string> = atom({
    key: "isRef",
    default: "false"
});