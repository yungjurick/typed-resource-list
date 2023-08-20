import { atom } from "recoil";
import { RESOURCES_ATOM_KEY } from "./keys";

export const resourcesAtom = atom<Resource[]>({
  key: RESOURCES_ATOM_KEY,
  default: [],
});
