import { v4 as uuidV4 } from "uuid";
import { useRef, useState } from "react";
import useOutSideClick from "@/hooks/useOutsideClick";

import { useSetRecoilState } from "recoil";
import { resourcesAtom } from "@/store";
import Input from "@/components/Input";

interface Props {
  onClose: () => void;
}

export default function ResourceUrlInput({ onClose }: Props): JSX.Element {
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  const [url, setUrl] = useState("");
  const setResourceList = useSetRecoilState(resourcesAtom);

  // Close URL Input on Outside Click
  useOutSideClick(inputWrapperRef, () => {
    onClose();
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 1. Validate URL
    // TODO: 2. Add URL Resource to Resource List

    // FIXME: Testing Resource List Addition (URL)
    setResourceList((prevList) => [
      ...prevList,
      {
        id: uuidV4(),
        type: "url",
        title: url, // - default title is the URL itself
        url,
        createdAt: new Date().toISOString(),
      },
    ]);

    // Reset URL Input
    setUrl("");
  };

  return (
    <div
      ref={inputWrapperRef}
      className="absolute -bottom-[40px] left-0 w-full px-[10px]"
    >
      <div className="w-full border border-[#E5E5E5] rounded-[5px] p-[5px] bg-white">
        <form onSubmit={handleSubmit}>
          <Input
            value={url}
            placeholder="https://..."
            onChange={(val) => setUrl(val)}
          />
        </form>
      </div>
    </div>
  );
}
