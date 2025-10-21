import Image from "next/image";
import React from "react";
import AuthImage from "@/public/Abstract Curves and Colors.jpeg";
import Logo from "@/components/Logo";
import AuthForm from "@/components/authentication/AuthForm";

const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relative">
      {/* Left Side */}
      <div className="relative flex w-full flex-col p-10 text-foreground overflow-hidden">
        {/* Background Image */}
        <Image
          src={AuthImage}
          alt="Background"
          fill
          className="object-cover z-0"
        />

        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Logo (above bg) */}
        <div className="relative z-20 flex items-center">
          <Logo />
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-white">
              &ldquo;Imagify AI is a game changer for me. I have been able to generate
              high quality professional headshots within minutes. It has saved
              me countless hours of work and cost as well.&rdquo;
            </p>
            <footer className="text-sm text-white">Obayedullah Khan</footer>
          </blockquote>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex flex-col items-center justify-center p-8 h-full">
       <AuthForm />
      </div>
    </main>
  );
};

export default AuthenticationPage;
