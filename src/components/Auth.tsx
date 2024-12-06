"use client";
import React from "react";
import Wrapper from "./Wrapper";
import LiftSide from "./ReuseComponent/LiftSide";
import { usePathname } from "next/navigation";
import InputField from "./ReuseComponent/InputField";
import Button from "./ReuseComponent/Button";
import Link from "next/link";

const Auth = () => {
  const pathname = usePathname();

  const handleLogin = async () => {
    console.log("Login clicked");
    // Add your login logic here
  };

  const handleRegister = async () => {
    console.log("Register clicked");
    // Add your register logic here
  };

  const isLoginPage = pathname === "/";
  const isRegisterPage = pathname === "/register";

  return (
    <Wrapper>
      <div className="flex bg-white text-black">
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
                <InputField
                  id="full_name"
                  required={true}
                  label="Full Name"
                  name="fullName"
                  placeholder="Enter your full name"
                />
              )}
              {(isLoginPage || isRegisterPage) && (
                <InputField
                  type="email"
                  label="Email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
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
      </div>
    </Wrapper>
  );
};

export default Auth;
