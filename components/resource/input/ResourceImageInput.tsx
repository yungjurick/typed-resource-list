import { resourcesAtom } from "@/store";
import { useSetRecoilState } from "recoil";
import { v4 as uuidV4 } from "uuid";

export default function ResourceImageInput(): JSX.Element {
  const setResourceList = useSetRecoilState(resourcesAtom);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // early-return for no files
    if (!files || files.length === 0) return;

    // TODO: 1. Validate Resource Register
    // TODO: 2. Add Image Resource to Resource List

    // FIXME: Testing Resource List Addition (IMAGE)
    const imageResourceList: ImageResource[] = Array.from(files).map(
      (file) => ({
        id: uuidV4(),
        type: "image",
        title: file.name, // - default title is the file name
        file,
        createdAt: new Date().toISOString(),
      })
    );

    setResourceList((prevList) => [...prevList, ...imageResourceList]);
  };

  return (
    <>
      <label
        htmlFor="image-upload"
        className="w-full h-full block cursor-pointer py-[8px]"
      >
        이미지 추가
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/jpeg, image/png"
        className="hidden"
        multiple
        onChange={handleOnChange}
      />
    </>
  );
}
