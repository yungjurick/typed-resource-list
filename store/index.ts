import { atom, selector } from "recoil";
import {
  RESOURCES_ATOM_KEY,
  SELECTED_RESOURCE_ID_ATOM_KEY,
  SELECTED_RESOURCE_SELECTOR_KEY,
  SORTED_RESOURCES_SELECTOR_KEY,
} from "./keys";
import compareAsc from "date-fns/compareAsc";

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

export const sortedResourcesSelector = selector<Resource[]>({
  key: SORTED_RESOURCES_SELECTOR_KEY,
  get: ({ get }) => {
    const resources = [...get(resourcesAtom)];

    if (resources.length === 0 || resources.length === 1) return resources;

    return resources.sort((a, b) =>
      compareAsc(new Date(b.createdAt), new Date(a.createdAt))
    );
  },
});

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
