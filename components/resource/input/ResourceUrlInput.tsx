import { useState } from "react";
import Input from "@/components/Input";
import useUploadResource from "@/hooks/useUploadResource";
import { toast } from "react-toastify";

interface Props {
  onClose: () => void;
}

export default function ResourceUrlInput({ onClose }: Props): JSX.Element {
  const [url, setUrl] = useState("");

  const { uploadUrlResource } = useUploadResource();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Close if no URL
    if (!url) onClose();

    const toastId = toast.loading("Uploading Url Resource...");

    try {
      await uploadUrlResource(url);
      toast.update(toastId, {
        render: "Url Resource Uploaded!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (e) {
      toast.update(toastId, {
        render: `${e}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    // Reset URL Input
    setUrl("");
    onClose();
  };

  return (
    <div className="absolute -bottom-[40px] left-0 w-full px-[10px]">
      <div className="w-full border border-[#E5E5E5] rounded-[5px] p-[5px] bg-white">
        <form onSubmit={handleSubmit}>
          <Input
            value={url}
            placeholder="https://..."
            onChange={(val) => setUrl(val)}
            onBlur={() => onClose()}
          />
        </form>
      </div>
    </div>
  );
}
