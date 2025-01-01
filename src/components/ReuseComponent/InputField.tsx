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
    <>
      <div
        className={` rounded-[12px] shadow-md max-w-[580px]   h-[100px] ${
          errorMessage ? "border border-[#FF7474]" : ""
        }`}
      >
        <div className="pl-4 py-3 flex flex-col space-y-2 ">
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
            className={`outline-none placeholder:text-sm placeholder:font-normal placeholder:opacity-50`}
          />
        </div>
      </div>
      {errorMessage && (
        <span className="text-[#FF7474] text-sm pl-2">{errorMessage}</span>
      )}
    </>
  );
}

export default InputField;
