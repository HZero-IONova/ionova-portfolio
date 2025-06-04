import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-500 text-sm text-light focus:outline-none focus:ring-2 focus:ring-magenta transition w-full ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input";
