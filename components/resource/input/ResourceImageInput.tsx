import useValidateResource from "@/hooks/useValidateResource";

export default function ResourceImageInput(): JSX.Element {
  const { uploadImageResource } = useValidateResource();

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // early-return for no files
    if (!files || files.length === 0) return;

    const filesArr = Array.from(files);

    // Upload each image file
    filesArr.forEach(async (file) => {
      try {
        await uploadImageResource(file);
      } catch (e) {
        alert(e);
      }
    });
  };

  return (
    <>
      <label
        htmlFor="image-upload"
        className="w-full h-full inline-block cursor-pointer py-[8px] leading-none"
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
