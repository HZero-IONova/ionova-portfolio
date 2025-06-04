import React, {
  useState,
  useRef,
  useEffect,
  ReactNode,
  KeyboardEvent,
} from "react";

interface SelectProps {
  placeholder?: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  placeholder = "Select an option",
  options,
  value,
  onChange,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Keyboard navigation (optional basic)
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowDown" && !open) {
      e.preventDefault();
      setOpen(true);
    }
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

  return (
    <div
      ref={containerRef}
      className={`relative inline-block w-full text-left ${className}`}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-left text-sm text-light focus:outline-none focus:ring-2 focus:ring-magenta transition flex justify-between items-center"
      >
        <span>{selectedLabel || placeholder}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          tabIndex={-1}
          role="listbox"
          aria-activedescendant={value}
          className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-gray-900 border border-gray-700 py-1 text-sm text-light shadow-lg"
        >
          {options.map(({ label, value: optionValue }) => (
            <li
              key={optionValue}
              role="option"
              aria-selected={value === optionValue}
              onClick={() => {
                onChange(optionValue);
                setOpen(false);
              }}
              className={`cursor-pointer select-none px-4 py-2 hover:bg-magenta/80 ${
                value === optionValue ? "bg-magenta/70 font-semibold" : ""
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
