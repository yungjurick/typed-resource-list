import { selectedResourceSelector } from "@/store";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import ResourceViewerHeader from "./ResourceViewerHeader";

export default function ResourceViewer(): JSX.Element {
  const selectedResource = useRecoilValue(selectedResourceSelector);

  return (
    <div className="h-full flex flex-col justify-between bg-[#F0F0F0]">
      {/* Viewer Header */}
      {selectedResource && (
        <ResourceViewerHeader title={selectedResource.title} />
      )}

      {selectedResource && (
        <div className="flex justify-center items-center w-full flex-1 max-h-[calc(100vh-50px)] relative bg-white">
          {/* URL Resource View */}
          {selectedResource.type === "url" && (
            <iframe
              src={selectedResource.url}
              className="absolute left-0 top-0 w-full h-full"
            />
          )}

          {/* Image Resource View */}
          {selectedResource.type === "image" && (
            <Image
              src={selectedResource.fileBase64}
              alt="selected-image"
              width={350}
              height={350}
              className="w-auto h-full object-contain"
            />
          )}
        </div>
      )}
    </div>
  );
}
