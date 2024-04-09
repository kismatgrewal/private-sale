import React, { useState } from "react";
import Line from "./common/Line";
import Heading from "./common/Heading";

import Button from "./common/Button";
import Defaultbtn from "./common/Defaultbtn";
import { BtnNavtab } from "./common/Helper";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Interested = ({ next, setNext }) => {
  const [describe, setDescribe] = useState("");
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="flex mt-[60px] gap-2 items-center ">
        <div
          className="text-[32px] cursor-pointer hover:text-yellow-300 duration-700"
          onClick={() => setNext(next - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <Line width="40%" />
      </div>
      <Heading
        Heading="Which are you most interested in?"
        para="Choose just one. This will help us get you started (but won't limit your experience)"
      />
      <div className="w-full flex flex-col gap-3 items-center mt-5 sm:mt-[60px]">
        {BtnNavtab.map((item, index) => (
          <button
            onClick={() => setDescribe(item.name)}
            key={index}
            type="button"
            className={`flex px-4 sm:px-7 items-center gap-2 sm:gap-8 border-[2px] rounded-xl h-[50px] sm:h-[70px] max-w-[600px] w-full hover:shadow-xl duration-300 ease-in-out hover:border-yellow-200 ${
              describe === item.name ? "shadow-xl border-yellow-200" : ""
            }`}
          >
            <div className="sm:text-3xl text-[16px]">{item.icon}</div>
            <span className="font-poppins line-clamp-1 font-medium text-[16px] sm:text-lg text-black">
              {item.name}
            </span>
          </button>
        ))}
      </div>
      {describe ? (
        <div onClick={() => setNext(next + 1)}>
          <Button />
        </div>
      ) : (
        <Defaultbtn />
      )}
    </div>
  );
};

export default Interested;
