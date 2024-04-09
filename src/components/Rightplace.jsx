import React from "react";
import Line from "./common/Line";
import Button from "./common/Button";
import wightimg from "../Assets/img/wight-machin.png";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Rightplace = ({ next, setNext }) => {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="flex mt-[60px] gap-2 items-center ">
        <div
          className="text-[32px] cursor-pointer hover:text-yellow-300 duration-700"
          onClick={() => setNext(next - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <Line width="60%" />
      </div>

      <div className="sm:mt-[60px] mt-5 gap-8 flex md:flex-row flex-col-reverse w-full justify-evenly items-center ">
        <img src={wightimg} alt="wight-img" className="max-w-[400px] w-full" />
        <div className="flex flex-col gap-5 w-[90%] md:w-[40%]">
          <h1 className="sm:text-[32px] text-[22px] text-black font-bold tracking-[1px] font-poppins leading-[120%]">
            You're in the right place
          </h1>
          <p className="sm:text-[18px] text-[14px] text-[#5f5f5f] font-medium font-poppins leading-[110%]">
            Brilliant gets you hands-on to help improve your proffesional skills
            and knowledge. you'll interact with concept and solve fun problem in
            math,since, and computer science
          </p>
        </div>
      </div>

      <div className="mt-10" onClick={() => setNext(next + 1)}>
        <Button />
      </div>
    </div>
  );
};

export default Rightplace;
