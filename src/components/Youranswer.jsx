import React from "react";
import Heading from "./common/Heading";
import build from "../Assets/img/build.png";
const Youranswer = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex-col gap-4 flex items-center justify-center">
      <Heading
        Heading="Learning paths based on your answers"
        para="Choose one to get started.You can switch anytime."
      />
      <div className="flex lg:flex-row flex-col mt-9 gap-6 w-fit mx-auto">
        <div className="border max-w-[550px] w-full relative mx-auto rounded-[12px] border-[#e8e8e8] py-8 px-6 items-center flex sm:flex-row flex-col-reverse gap-3">
          <button
            type="submit"
            className=" uppercase absolute px-3 -top-5 left-[35%] py-1 bg-[#f1b232] text-black text-[16px] font-bold font-poppins rounded-[14px]"
          >
            Most Popular
          </button>
          <h2 className="text-black max-sm:text-center text-[16px] sm:text-[22px] font-poppins font-bold">
            Foundational Math{" "}
            <span className="font-medium">
              Build your foundational skills in algebra, geometry,and probality.
            </span>
          </h2>
          <img
            src={build}
            alt="build-img"
            className="sm:max-w-[200px] max-w-[150px] w-full"
          />
        </div>
        <div className="border max-w-[550px] w-full sm:flex-row flex-col-reverse  mx-auto rounded-[12px] border-[#e8e8e8] py-8 px-6 items-center flex gap-3">
          <h2 className="text-black max-sm:text-center text-[16px] sm:text-[22px]  font-poppins font-bold">
            Mathematical Thinking
            <span className="font-medium">
              Build your foundational skills in algebra, geometry,and probality.
            </span>
          </h2>
          <img
            src={build}
            alt="build-img"
            className="sm:max-w-[200px] max-w-[150px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Youranswer;
