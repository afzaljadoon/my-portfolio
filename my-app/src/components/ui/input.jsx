import React, { forwardRef } from "react";

const base =
  "block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-sm",
  lg: "px-4 py-3 text-base",
};

const variants = {
  default: "",
  error: "border-red-500 focus:ring-red-500 focus:border-red-500",
};

const Input = forwardRef(
  ({ className = "", size = "md", variant = "default", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${base} ${sizes[size] ?? ""} ${
          variants[variant] ?? ""
        } ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input }; // named export
export default Input; // optional default export
