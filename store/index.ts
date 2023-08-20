import { atom, selector } from "recoil";
import {
  RESOURCES_ATOM_KEY,
  SELECTED_RESOURCE_ID_ATOM_KEY,
  SELECTED_RESOURCE_SELECTOR_KEY,
} from "./keys";

/**
 * Atoms
 */

export const resourcesAtom = atom<Resource[]>({
  key: RESOURCES_ATOM_KEY,
  default: [],
});

export const selectedResourceIdAtom = atom<string | null>({
  key: SELECTED_RESOURCE_ID_ATOM_KEY,
  default: null,
});

/**
 * Selectors
 */

export const selectedResourceSelector = selector<Resource | null>({
  key: SELECTED_RESOURCE_SELECTOR_KEY,
  get: ({ get }) => {
    const selectedResourceId = get(selectedResourceIdAtom);
    const resources = get(resourcesAtom);

    return (
      resources.find((resource) => resource.id === selectedResourceId) ?? null
    );
  },
});
