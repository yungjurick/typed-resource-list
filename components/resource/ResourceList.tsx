import { resourcesAtom } from "@/store";
import { useRecoilValue } from "recoil";
import ResourceListItem from "./ResourceListItem";

export default function ResourceList(): JSX.Element {
  const resourceList = useRecoilValue(resourcesAtom);

  return (
    <div className="p-[10px] flex flex-col gap-y-[10px]">
      {resourceList.map((resource) => (
        <ResourceListItem
          key={`${resource.type}-${resource.id}`}
          id={resource.id}
          title={resource.title}
        />
      ))}
    </div>
  );
}
