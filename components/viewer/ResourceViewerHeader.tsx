import { selectedResourceIdAtom } from "@/store";
import { useSetRecoilState } from "recoil";
import { TypedIcon } from "typed-design-system";

interface Props {
  title: string;
}

export default function ResourceViewerHeader({ title }: Props): JSX.Element {
  const setSelectedResourceId = useSetRecoilState(selectedResourceIdAtom);

  return (
    <div className="relative z-10 h-[50px] grid grid-cols-3 grid-rows-1 pt-[16px] pr-[15px] pb-[15px] pl-[17px] bg-white shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)]">
      <div className="col-span-2 h-full flex items-center">
        <p className="truncate leading-1 text-[14px]">{title}</p>
      </div>
      <div className="flex items-center justify-end h-full">
        <button
          className="w-[19px]"
          onClick={() => setSelectedResourceId(null)}
        >
          <TypedIcon icon="close_19" style={{ fontSize: "19px" }} />
        </button>
      </div>
    </div>
  );
}
