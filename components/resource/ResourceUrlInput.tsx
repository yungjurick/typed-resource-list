import { useRef, useState } from "react";
import Input from "../input";
import useOutSideClick from "@/hooks/useOutsideClick";

interface Props {
  onClose: () => void;
}

export default function ResourceUrlInput({ onClose }: Props): JSX.Element {
  const urlInputWrapperRef = useRef<HTMLDivElement>(null);

  const [url, setUrl] = useState("");

  // Close URL Input on Outside Click
  useOutSideClick(urlInputWrapperRef, () => {
    onClose();
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: 1. Validate URL
    // TODO: 2. Add URL Item to Resource List
  };

  return (
    <div
      ref={urlInputWrapperRef}
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
