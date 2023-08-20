import { selectedResourceAtom } from "@/store";
import { useRecoilValue } from "recoil";

export default function ResourceViewer(): JSX.Element {
  const selectedResource = useRecoilValue(selectedResourceAtom);
  return (
    <div>
      {/* URL Resource View */}
      {selectedResource?.type === "url" && <></>}

      {/* Image Resource View */}
      {selectedResource?.type === "image" && <></>}
    </div>
  );
}
