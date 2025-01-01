"use client";
import React, { useRef, useState } from "react";
import Button from "./ReuseComponent/Button";

const OtpModal = ({ length = 6 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]); // Ensure ref array contains HTMLInputElement or null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    // Create a copy of the OTP array
    const newOtp = [...otp];

    if (value.match(/^\d$/)) {
      // If valid digit, update the value in the OTP array
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1]?.focus(); // Safely access the next input
      }
    } else if (value === "") {
      // Handle backspace (empty input)
      newOtp[index] = "";
      setOtp(newOtp);

      // Move focus to the previous input on backspace
      if (index > 0) {
        inputs.current[index - 1]?.focus(); // Safely access the previous input
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // Move focus to previous input on backspace if current input is empty
      if (index > 0) {
        inputs.current[index - 1]?.focus(); // Safely access the previous input
      }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center px-8 my-4 gap-10 max-w[550px] max-h-[360px] rounded-[20px]">
      <h2 className="text-2xl leading-9 font-bold">Enter OTP</h2>
      <p className="text-sm leading-5 font-normal">
        We&apos;ve sent a code to adrian@jsmastery.pro
      </p>
      <div className="flex space-x-2 gap-[6px]">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            className={`w-[75px] h-24 text-center text-[50px] font-medium leading-[60px] placeholder:text-gray-300 placeholder:text-[50px] placeholder:font-medium placeholder:leading-[60px] border rounded-xl focus:outline-none ${
              value
                ? "text-[#FA7275] border-[#FA7275]"
                : "text-gray-700 border-gray-300"
            }`}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder="0"
            ref={(el) => {
              inputs.current[index] = el; // Assign the element to the ref array
            }}
          />
        ))}
      </div>
      <Button
        name=" Submit"
        handleClick={() => console.log(otp.join(""))}
        type="submit"
        className="w-full h-[66px] py-5"
      />
      <p className="text-sm leading-5 font-normal">
        Didn&apos;t get a code?{" "}
        <span className="text-[#FA7275]">Click to resend</span>.
      </p>
    </section>
  );
};

export default OtpModal;
