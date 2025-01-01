"use client";
import React from "react";
import Wrapper from "./Wrapper";
import LiftSide from "./ReuseComponent/LiftSide";
import { usePathname } from "next/navigation";
import InputField from "./ReuseComponent/InputField";
import Button from "./ReuseComponent/Button";
import Link from "next/link";
import OtpModal from "./OtpModal";

const Auth = () => {
  const pathname = usePathname();
  const [email, setEmail] = React.useState<string>("");
  const [fullName, setFullName] = React.useState<string>("");
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [error, setError] = React.useState<{
    email?: string;
    fullName?: string;
  }>({});

  const handleLogin = async () => {
    console.log("Login clicked");
    // Add your login logic here
  };

  const handleRegister = async () => {
    const errors: { email?: string; fullName?: string } = {};

    if (email === "") {
      errors.email = "Email is required";
    }

    if (fullName === "") {
      errors.fullName = "Full Name is required";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    console.log("Register clicked");
    setError({});
    setIsSubmitted(true);
    // Add your register logic here
  };

  const isLoginPage = pathname === "/";
  const isRegisterPage = pathname === "/register";

  return (
    <Wrapper>
      <div className="flex bg-white text-black relative">
        <LiftSide />
        <main className="flex h-[100vh] justify-center items-center flex-1">
          <div className="flex flex-col space-y-8 w-[580px] mx-[140px]">
            <div className="flex text-[46px] leading-[56px] font-bold">
              <h1>
                {isLoginPage ? "Login" : isRegisterPage ? "Register" : ""}
              </h1>
            </div>
            <div className="flex flex-col space-y-10">
              {isRegisterPage && (
                <div>
                  <InputField
                    id="full_name"
                    required={true}
                    label="Full Name"
                    name="fullName"
                    value={fullName}
                    handleChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    errorMessage={error.fullName}
                  />
                </div>
              )}
              {(isLoginPage || isRegisterPage) && (
                <div>
                  <InputField
                    type="email"
                    label="Email"
                    name="email"
                    id="email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    errorMessage={error.email}
                  />
                </div>
              )}
            </div>
            <div className="mt-6">
              {isLoginPage && (
                <Button
                  type="submit"
                  name="Login"
                  handleClick={handleLogin}
                  className="w-full h-[66px]"
                />
              )}
              {isRegisterPage && (
                <Button
                  type="submit"
                  name="Register"
                  handleClick={handleRegister}
                  className="w-full h-[66px]"
                />
              )}
            </div>
            <div className="text-center text-sm font-normal mt-4">
              {isLoginPage ? (
                <>
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-[#FA7275] cursor-pointer"
                  >
                    Create Account
                  </Link>
                </>
              ) : isRegisterPage ? (
                <>
                  Already have an account?{" "}
                  <Link href="/" className="text-[#FA7275] cursor-pointer">
                    Login
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </main>
        {isSubmitted && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 " />
            <div className="relative z-60 bg-white p-8 rounded-[20px] shadow-lg">
              <OtpModal length={6} />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Auth;
