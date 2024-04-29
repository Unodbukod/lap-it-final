import React from "react";
import Image from "next/image";
import SignUpForm from "@/components/form/signupform";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 h-screen relative hidden lg:block">
          {/* Background Image */}
          <div className="lg:bg-800 xl:bg-500 bg-cover bg-center h-[800px] xl:h-[500px]">
            <Image
              src="/login/Background.png"
              alt=""
              layout="fill"
            />
          </div>
          
          {/* Logo */}
          <div>
            <a href="/.">
              <Image
                src="/Lapwhitelogo.svg"
                width={150}
                height={150}
                className="absolute top-0 left-0 m-4 md:m-6 lg:m-8 xl:m-10 max-w-full h-auto"
                alt="Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }} 
              />
            </a>
          </div>
          
          {/* Quote */}
          <div className="absolute justify-center bottom-0 left-0 right-0 text-center mb-8 md:mb-12 lg:mb-16 mx-[40px]">
            <p className="text-white font-medium lg:text-[12px] xl:text-[14px] lg:text-base ">
              “Empower your business journey, elevate your achievements! Unleash
              the possibilities of smooth administration, insightful analytics,
              and tailored solutions on our diverse platform.”
            </p>
            <p className="px-6 text-[10px] font-light text-left text-white ">Lap Solution TEAM</p>
          </div>
        </div>
        
        <div className="w-screen h-screen lg:w-1/2 p-8 flex justify-center items-center">
          {/* Form or content */}
          <Button className="absolute top-0 right-0 m-4 md:m-6 lg:m-8 xl:m-10 max-w-full h-auto bg-transparent hover:bg-transparent text-black">
            <a href="/login/signin">Sign In</a>
          </Button>
          <SignUpForm/>
        </div>
      </div>
    </div>
  );
};

export default Page;