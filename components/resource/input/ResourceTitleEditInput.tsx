import { useState } from "react";
import Input from "../../Input";

interface Props {
  initialValue: string;
  onSubmit: (value: string) => void;
}

export default function ResourceTitleEditInput({
  initialValue,
  onSubmit,
}: Props): JSX.Element {
  const [title, setTitle] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          placeholder=""
          onChange={(val) => setTitle(val)}
          onBlur={() => onSubmit(title)}
        />
      </form>
    </div>
  );
}
