import { atom } from "recoil";
import { RESOURCES_ATOM_KEY } from "./keys";

export const resourcesAtom = atom({
  key: RESOURCES_ATOM_KEY,
  default: [],
});
