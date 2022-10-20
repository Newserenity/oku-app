import { atom } from "recoil";

const serverErrorModalstate = atom({
  key: "warningModalstate",
  default: false,
});

export { serverErrorModalstate };
