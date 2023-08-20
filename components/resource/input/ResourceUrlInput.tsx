import { useRef, useState } from "react";
import useOutSideClick from "@/hooks/useOutsideClick";
import Input from "@/components/Input";
import useUploadResource from "@/hooks/useUploadResource";

interface Props {
  onClose: () => void;
}

export default function ResourceUrlInput({ onClose }: Props): JSX.Element {
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  const [url, setUrl] = useState("");

  const { uploadUrlResource } = useUploadResource();

  // Close URL Input on Outside Click
  useOutSideClick(inputWrapperRef, () => {
    onClose();
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Close if no URL
    if (!url) onClose();

    try {
      await uploadUrlResource(url);
    } catch (e) {
      const err = e as Error;
      alert(err);
    }

    // Reset URL Input
    setUrl("");
    onClose();
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
