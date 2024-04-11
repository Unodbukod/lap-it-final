import React from "react";
import Image from "next/image";

const Secondsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-screen h-[80vh] relative">
            <div className="flex flex-col">
                <div className="text-center">
                    <h1 className="text-[48px] font-extrabold mx-28">OUR PURPOSE & DIRECTION</h1>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur. Volutpat nulla lorem vitae dolor enim viverra orci..</p>
                </div>

            </div>
            <div className="mt-14">
            <div className="flex flex-row items-center justify-center ">
                    <div className="bg-blue-50 border bg-blue-50 p-[32px] mx-10">
                            <div className=" w-[612px] h-[300px]">
                                <h1 className="text-blue-500 font-extrabold">OUR MISSION</h1>
                                <h1 className="text-black font-extrabold text-[36px] ">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h1>
                                <h1 className="text-gray-500 font-extralight text-[16px] mt-5">Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam facilisis dui consectetur. Sed nunc sed nunc ut in diam ultrices blandit. Aenean varius elit sagittis praesent id leo. Turpis mauris accumsan lobortis congue non velit diam massa.</h1>

                            </div>
                    </div>
                    <div className="bg-blue-50 border bg-blue-50 p-[32px] mx-10">
                            <div className=" w-[612px] h-[300px]">
                                <h1 className="text-blue-500 font-extrabold">OUR MISSION</h1>
                                <h1 className="text-black font-extrabold text-[36px] ">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h1>
                                <h1 className="text-gray-500 font-extralight text-[16px] mt-5">Lorem ipsum dolor sit amet consectetur. Id posuere vulputate diam facilisis dui consectetur. Sed nunc sed nunc ut in diam ultrices blandit. Aenean varius elit sagittis praesent id leo. Turpis mauris accumsan lobortis congue non velit diam massa.</h1>

                            </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Secondsection;