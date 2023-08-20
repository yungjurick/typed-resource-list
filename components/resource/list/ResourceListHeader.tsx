import { useState } from "react";
import ResourceUrlInput from "../input/ResourceUrlInput";
import ResourceImageInput from "../input/ResourceImageInput";

export default function ResourceListHeader(): JSX.Element {
  const [showUrlInput, setShowUrlInput] = useState(false);

  return (
    <div className="relative p-[10px] flex justify-between items-center gap-x-[10px] bg-white shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)]">
      {/* Action Buttons */}
      <button
        className="w-full rounded-[5px] border border-[#E5E5E5] text-[12px] font-[400] py-[8px] leading-none h-[30px]"
        onClick={() => setShowUrlInput(true)}
      >
        URL 추가
      </button>
      <button className="w-full rounded-[5px] border border-[#E5E5E5] text-[12px] font-[400] leading-none h-[30px]">
        <ResourceImageInput />
      </button>

      {/* URL Input */}
      {showUrlInput && (
        <ResourceUrlInput onClose={() => setShowUrlInput(false)} />
      )}
    </div>
  );
}
