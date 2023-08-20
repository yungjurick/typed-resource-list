import { useState } from "react";

import { TypedIcon } from "typed-design-system";
import ResourceTitleEditInput from "../input/ResourceTitleEditInput";

type Props = Pick<Resource, "id" | "title">;

export default function ResourceListItem({ id, title }: Props): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeTitle = (value: string) => {
    console.log("Changed", value);

    // Set IsEditing to False
    setIsEditing(false);
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
        <button>
          <TypedIcon icon="trash_19" style={{ fontSize: "19px" }} />
        </button>
      </div>
    </div>
  );
}
