// src/components/ui/button.jsx
import React from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring";
const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
  ghost: "text-gray-900 hover:bg-gray-100",
};

function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export { Button }; // ✅ named export
export default Button; // (optional) default export too
