import ResourceList from "./ResourceList";
import ResourceListHeader from "./ResourceListHeader";

export default function ResourceListContainer(): JSX.Element {
  return (
    <div className="relative bg-[#F7F7F7] h-full">
      <ResourceListHeader />
      <ResourceList />
    </div>
  );
}
