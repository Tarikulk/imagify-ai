"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import SignupForm from "./SignupForm"; 
import Link from "next/link";

const AuthForm = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          {" "}
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </h1>

        <p className="text-sm text-muted-foreground">
          {" "}
          {mode === "reset"
            ? "Enter Your Email Below To Reset Your Password"
            : mode === "login"
            ? "Enter Your Email Below To Login In Your Account"
            : "Enter Your Information Below To Create An Account"}
        </p>
      </div>
      {mode === "login" && (
        <>
          <LoginForm />
          <div className="text-center flex justify-between">
            <Button
              variant={"link"}
              className="p-0"
              onClick={() => setMode("signup")}
            >
              Need an account? Sign Up
            </Button>
            <Button
              variant={"link"}
              className="p-0"
              onClick={() => setMode("reset")}
            >
              Forgot password?
            </Button>
          </div>
        </>
      )}
      {mode === "signup" && (
        <>
          <SignupForm />
          <div className="text-center">
            <Button
              variant={"link"}
              className="p-0"
              onClick={() => setMode("login")}
            >
              Already have an account? Log in
            </Button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking sign up, you are agree with our terms and condition{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </>
      )}
      {mode === "reset" && <span>Reset Password Form</span>}
    </div>
  );
};

export default AuthForm;
