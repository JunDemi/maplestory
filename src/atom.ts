import { RecoilState, atom } from "recoil";

export const ocidState:RecoilState<string> = atom({
    key: "selected_ocid",
    default: ""
});
