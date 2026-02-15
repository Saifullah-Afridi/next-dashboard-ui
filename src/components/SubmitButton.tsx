import React from "react";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubmitButton({
  children,
  className = "",
}: SubmitButtonProps) {
  return (
    <button
      className={`bg-brand-primary hover:opacity-90 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 ${className}`}
      style={{
        background:
          "linear-gradient(to right, hsl(var(--brand-primary)), hsl(var(--brand-secondary)))",
      }}
    >
      {children}
    </button>
  );
}
