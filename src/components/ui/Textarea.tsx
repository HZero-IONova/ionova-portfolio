import React, { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 placeholder-gray-500 text-sm text-light focus:outline-none focus:ring-2 focus:ring-magenta transition resize-none w-full ${className}`}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
