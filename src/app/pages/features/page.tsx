/* eslint-disable react/no-unescaped-entities */
import NavBar from "@/app/components/navbar";
import React from "react";
import Firstsection from "./components/firstsec";
import Secondsection from "./components/secondsec";
import Thirdsection from "./components/thridsec";
import Forthsection from "./components/forthsec";
import Footer from "@/app/components/constants/Footer";
import BottomOfFooter from "@/app/components/constants/BottomOfFooter";

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-indigo-800 w-full h-screen">
      <NavBar />
      <div className="flex flex-col select-none max-h-screen">
        <section className="h-96 flex flex-col items-center justify-center sm:pt-7 ">
          <div className="text-black font-extrabold text-[16px] sm:text-[25px] md:text-[30px] xl:text-[50px] text-center">
            <div className="flex flex-row translate-y-16">
              <div>
                <h1 className="text-white">COMING</h1>
              </div>
              <div className="ml-1 sm:ml-2 md:ml-3 border rounded-md bg-red-600 px-1 sm:px-[7px] md:px-[10px] xl:px-[13px] -translate-y-[1px] text-white">
                <h1>SOON</h1>
              </div>
            </div>
          </div>
          <div className=" text-[10px] sm:text-[11px] md:text-[13px] xl:text-[23px] translate-y-14 sm:translate-y-14">
            <h1 className=" text-white text-center pt-10 ">
              We're working hard behind the scenes to bring you something
              amazing. Stay tuned for updates!
            </h1>
          </div>
        </section>
      </div>

      {/* <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
      <Footer/> */}
    </div>
  );
};

export default Page;
