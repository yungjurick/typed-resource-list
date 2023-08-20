import { TypedIcon } from "typed-design-system";

type Props = Pick<Resource, "id" | "title">;

export default function ResourceListItem({ id, title }: Props): JSX.Element {
  return (
    <div className="bg-white rounded-[10px] h-[90px]">
      {/* Top Section */}
      <div></div>

      {/* Actions */}
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}
