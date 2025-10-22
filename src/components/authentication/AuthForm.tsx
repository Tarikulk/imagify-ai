"use client"
import React, { useState } from 'react'
import LoginForm from './LoginForm';


const AuthForm = () => {

  const [mode, setMode] = useState("login");

  return (
    <div className='space-y-6'>
      <div className="flex flex-col space-y-2 text-center">
      <h1 className='text-2xl font-bold tracking-tight'> {
          mode === "reset" ? "Reset Password" : mode === "login" ? "Login" : "Sign Up"
        }</h1>

<p className='text-sm text-muted-foreground'> {
          mode === "reset" ? "Enter Your Email Below To Reset Your Password" : mode === "login" ? "Enter Your Email Below To Login In Your Account" : "Enter Your Information Below To Create An Account"
        }</p>
      </div>
      {
        mode === "login" && <LoginForm />
      }
      {
        mode === "signup" && <span>Sign Up Form</span>
      }
      {
        mode === "reset" && <span>Reset Password Form</span>
      }
    </div>
  )
}

export default AuthForm