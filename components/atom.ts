import { atom } from "recoil";
import { v1 } from "uuid";

export const serverErrorModalstate = atom({
  key: `serverErrorModalstate/${v1()}`,
  default: false,
});

export const searchQuery = atom({
  key: `searchQuery/${v1()}`,
});
