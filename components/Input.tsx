import { useEffect, useRef } from "react";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}

/**
 * Custom Input Component
 * @param Props
 * @returns Input Component
 */
export default function Input({
  value,
  placeholder = "...",
  onChange,
  onBlur,
}: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Set initial focus to input on render
    ref.current?.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      className="text-[12px] font-[400] p-[8px] w-full rounded-[5px] border border-[#38A5E1] bg-[#F7F7F7] outline-none"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    />
  );
}
