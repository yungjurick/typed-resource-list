import useUploadResource from "@/hooks/useUploadResource";
import { toast } from "react-toastify";

export default function ResourceImageInput(): JSX.Element {
  const { uploadImageResource } = useUploadResource();

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // early-return for no files
    if (!files || files.length === 0) return;

    const filesArr = Array.from(files);

    // Upload each image file
    filesArr.forEach(async (file) => {
      const toastId = toast.loading("Uploading Image...");

      try {
        await uploadImageResource(file);
        toast.update(toastId, {
          render: "Image Uploaded!",
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
    });
  };

  return (
    <>
      <label
        htmlFor="image-upload"
        className="w-full h-full inline-block cursor-pointer py-[8px]"
      >
        이미지 추가
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/jpeg, image/png"
        className="hidden"
        multiple
        onClick={(e) => {
          // Reset input value to allow re-upload of same file
          e.currentTarget.value = "";
        }}
        onChange={handleOnChange}
      />
    </>
  );
}
