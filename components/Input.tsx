interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

/**
 * Custom Input Component
 * @param Props
 * @returns Input Component
 */
export default function Input({ value, placeholder = "...", onChange }: Props) {
  return (
    <input
      value={value}
      className="text-[12px] font-[400] p-[8px] w-full rounded-[5px] border border-[#38A5E1] bg-[#F7F7F7]"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
