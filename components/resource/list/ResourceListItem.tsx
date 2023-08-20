import { useState } from "react";

import { TypedIcon } from "typed-design-system";
import ResourceTitleEditInput from "../input/ResourceTitleEditInput";
import { useSetRecoilState } from "recoil";
import { resourcesAtom } from "@/store";

type Props = Pick<Resource, "id" | "title">;

export default function ResourceListItem({ id, title }: Props): JSX.Element {
  const setResourceList = useSetRecoilState(resourcesAtom);

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeTitle = (value: string) => {
    console.log(`Title Changed - ${id}: ${value}`);

    // Update Resource List
    setResourceList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: value,
          };
        }
        return item;
      })
    );

    // Set IsEditing to False
    setIsEditing(false);
  };

  const handleDeleteItem = () => {
    console.log(`Item Deleted - ${id}`);

    // Update Resource List
    setResourceList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-[10px] h-[90px] flex flex-col justify-between cursor-pointer">
      {/* Top Section */}
      <div>
        {/* Resource Title */}
        {!isEditing && (
          <div className="pt-[12px] px-[12px] text-[14px]">{title}</div>
        )}

        {/* Resource Title Edit Input */}
        {isEditing && (
          <div className="px-[4px] pt-[4px]">
            <ResourceTitleEditInput
              initialValue={title}
              onSubmit={handleChangeTitle}
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end items-center gap-x-[8px] p-[12px]">
        <button onClick={() => setIsEditing((prev) => !prev)}>
          <TypedIcon icon="edit_19" style={{ fontSize: "19px" }} />
        </button>
        <button onClick={() => handleDeleteItem()}>
          <TypedIcon icon="trash_19" style={{ fontSize: "19px" }} />
        </button>
      </div>
    </div>
  );
}
