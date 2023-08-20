import { selectedResourceIdAtom } from "@/store";
import { useSetRecoilState } from "recoil";
import { TypedIcon } from "typed-design-system";

interface Props {
  title: string;
}

export default function ResourceViewerHeader({ title }: Props): JSX.Element {
  const setSelectedResourceId = useSetRecoilState(selectedResourceIdAtom);

  return (
    <div className="relative z-10 flex justify-between items-center pt-[16px] pr-[15px] pb-[15px] pl-[17px] bg-white shadow-[0px_2px_5px_0px_rgba(0,0,0,0.1)]">
      <span className="text-[14px] leading-none">{title}</span>
      <button onClick={() => setSelectedResourceId(null)}>
        <TypedIcon icon="close_19" style={{ fontSize: "19px" }} />
      </button>
    </div>
  );
}
