import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  name?: string;
  value?: string;
  errorMessage?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  type = "text",
  placeholder,
  required = false,
  id,
  name,
  value,
  errorMessage,
  handleChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col space-y-1  rounded-[12px] shadow-md max-w-[580px] pl-2 h-[78px]">
      <label htmlFor={id} className="text-sm font-normal">
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        className={`outline-none ${
          errorMessage ? "border-red-500" : ""
        } placeholder:text-sm placeholder:font-normal placeholder:opacity-50`}
      />
      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputField;
