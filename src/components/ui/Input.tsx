import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

const Input: React.FC<InputFieldProps> = ({ label, id, error, ...props }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1 capitalize"
      >
        {label}:{props.required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={id}
        className={`w-full rounded-lg border px-4 py-2 shadow-sm transition duration-150 ease-in-out focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
