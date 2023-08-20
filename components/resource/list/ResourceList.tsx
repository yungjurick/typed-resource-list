import { sortedResourcesSelector } from "@/store";
import { useRecoilValue } from "recoil";
import ResourceListItem from "./ResourceListItem";
import ResourceListHeader from "./ResourceListHeader";

export default function ResourceList(): JSX.Element {
  const resourceList = useRecoilValue(sortedResourcesSelector);

  return (
    <>
      <ResourceListHeader />

      <div className="p-[10px] flex flex-col gap-y-[10px] h-[calc(100vh-56px)] overflow-auto scrollbar-hide">
        {resourceList.map((resource) => (
          <ResourceListItem
            key={`${resource.type}-${resource.id}`}
            resource={resource}
          />
        ))}
      </div>
    </>
  );
}
