import { useRef, useState } from "react";
import Input from "../../Input";
import useOutSideClick from "@/hooks/useOutsideClick";

interface Props {
  initialValue: string;
  onSubmit: (value: string) => void;
}

export default function ResourceTitleEditInput({
  initialValue,
  onSubmit,
}: Props): JSX.Element {
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState(initialValue);

  // Close URL Input on Outside Click
  useOutSideClick(inputWrapperRef, () => {
    onSubmit(title);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title);
  };

  return (
    <div ref={inputWrapperRef}>
      <form onSubmit={handleSubmit}>
        <Input value={title} placeholder="" onChange={(val) => setTitle(val)} />
      </form>
    </div>
  );
}
