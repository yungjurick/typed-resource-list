import { atom } from "recoil";
import { RESOURCES_ATOM_KEY, SELECTED_RESOURCE_ATOM_KEY } from "./keys";

export const resourcesAtom = atom<Resource[]>({
  key: RESOURCES_ATOM_KEY,
  default: [],
});

export const selectedResourceAtom = atom<Resource | null>({
  key: SELECTED_RESOURCE_ATOM_KEY,
  default: null,
});
