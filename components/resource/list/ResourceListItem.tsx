import { useCallback, useEffect, useState } from "react";

import { TypedIcon } from "typed-design-system";
import ResourceTitleEditInput from "../input/ResourceTitleEditInput";
import { useRecoilState, useSetRecoilState } from "recoil";
import { resourcesAtom, selectedResourceIdAtom } from "@/store";

interface Props {
  resource: Resource;
}

export default function ResourceListItem({ resource }: Props): JSX.Element {
  const [selectedResourceId, setSelectedIdResource] = useRecoilState(
    selectedResourceIdAtom
  );

  const setResourceList = useSetRecoilState(resourcesAtom);

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeTitle = useCallback(
    (value: string) => {
      console.log(`Title Changed - ${resource.id}: ${value}`);

      // Update Resource List
      setResourceList((prevList) =>
        prevList.map((item) => {
          if (item.id === resource.id) {
            return {
              ...item,
              title: value.length === 0 ? "Untitled" : value,
            };
          }
          return item;
        })
      );

      // Set IsEditing to False
      setIsEditing(false);
    },
    [resource.id, setResourceList]
  );

  const handleDeleteItem = () => {
    console.log(`Item Deleted - ${resource.id}`);

    // Update Resource List
    setResourceList((prevList) =>
      prevList.filter((item) => item.id !== resource.id)
    );
  };

  const handleClickItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedIdResource(resource.id);
  };

  return (
    <div
      className={`bg-white rounded-[10px] h-[90px] shrink-0 flex flex-col justify-between cursor-pointer border ${
        selectedResourceId === resource.id
          ? "border-[#38A5E1]"
          : "border-transparent"
      }`}
      onClick={(e) => handleClickItem(e)}
    >
      {/* --- Top Section --- */}
      <div>
        {/* Resource Title */}
        {!isEditing && (
          <div className="pt-[12px] px-[12px] text-[14px] break-words line-clamp-2">
            {resource.title}
          </div>
        )}

        {/* Resource Title Edit Input */}
        {isEditing && (
          <div className="px-[4px] pt-[4px]">
            <ResourceTitleEditInput
              initialValue={resource.title}
              onSubmit={handleChangeTitle}
            />
          </div>
        )}
      </div>

      {/* --- Actions ---  */}
      <div className="flex justify-end items-center gap-x-[8px] p-[12px]">
        <button onClick={() => setIsEditing((prev) => !prev)}>
          <TypedIcon icon="edit_19" style={{ fontSize: "19px" }} />
        </button>
        <button onClick={handleDeleteItem}>
          <TypedIcon icon="trash_19" style={{ fontSize: "19px" }} />
        </button>
      </div>
    </div>
  );
}
