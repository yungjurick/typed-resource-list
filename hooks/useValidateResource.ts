import { v4 as uuidV4 } from "uuid";
import { resourcesAtom } from "@/store";
import { calculateSuccess, convertToBase64, randomDelay } from "@/utils";
import { isValidUrlSchema, isYoutubeUrl } from "@/utils/validator";
import { useSetRecoilState } from "recoil";

export default function useValidateResource() {
  const setResourceList = useSetRecoilState(resourcesAtom);

  const uploadUrlResource = async (url: string): Promise<void> => {
    let resultUrl = url;

    // 1. Initiate Random Delay
    await randomDelay();

    // 2. Check if URL is valid
    if (!isValidUrlSchema(url)) throw new Error("Invalid URL Schema");

    // 3. Check if URL is Youtube URL - if true, convert to embed URL
    if (isYoutubeUrl(url)) {
      resultUrl = url.replace("watch?v=", "embed/");
    }

    // 4. Calculate Success Rate
    const isSuccess = calculateSuccess();

    // 5-1. SUCCESS -> Return result URL
    if (isSuccess) {
      setResourceList((prevList) => [
        ...prevList,
        {
          id: uuidV4(),
          type: "url",
          title: resultUrl, // - default title is the URL itself
          url: resultUrl,
          createdAt: new Date().toISOString(),
        },
      ]);
      return;
    }

    // 5-2. FAIL -> Throw Error
    throw new Error("Failed to upload URL");
  };

  const uploadImageResource = async (file: File): Promise<void> => {
    // 1. Initiate Random Delay
    await randomDelay();

    // 2. Convert Image file to Base 64
    const base64 = await convertToBase64(file);

    // 3. Calculate Success Rate
    const isSuccess = calculateSuccess();

    // 4-1. SUCCESS -> Return Base64 String
    if (isSuccess) {
      setResourceList((prevList) => [
        ...prevList,
        {
          id: uuidV4(),
          type: "image",
          title: file.name, // - default title is the file name
          fileBase64: base64,
          createdAt: new Date().toISOString(),
        },
      ]);
      return;
    }

    // 4-2. FAIL -> Throw Error
    throw new Error("Failed to upload Image");
  };

  return {
    uploadUrlResource,
    uploadImageResource,
  };
}
