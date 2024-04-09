import React, { useState } from "react";
import Line from "./common/Line";
import Heading from "./common/Heading";

import Button from "./common/Button";
import Defaultbtn from "./common/Defaultbtn";
import { cardmap } from "./common/Helper";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Level = ({ next, setNext }) => {
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
        <Line width="80%" />
      </div>
      <Heading
        Heading="Which are you most interested in?"
        para="Choose just one. This will help us get you started (but won't limit your experience)"
      />
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-fit  gap-6 items-center my-5 sm:my-[60px]">
        {cardmap.map((item, index) => (
          <div
            onClick={() => setDescribe(item.name)}
            key={index}
            className={`flex px-4 flex-col  cursor-pointer sm:px-5 py-10 items-center gap-2 sm:gap-6 border-[2px] rounded-xl  max-w-[250px]   w-full hover:shadow-xl duration-300 ease-in-out hover:border-yellow-200 ${
              describe === item.name ? "shadow-xl border-yellow-200" : ""
            }`}
          >
            <img src={item.img} alt="" className="w-full h-[80px]" />
            <div className="mt-2 flex flex-col items-center gap-2">
              <h1 className="font-poppins line-clamp-1 font-medium text-[16px] sm:text-lg text-black">
                {item.name}
              </h1>
              <p className="font-poppins line-clamp-1 font-medium text-[16px] sm:text-lg text-black">
                {item.des}
              </p>
            </div>
          </div>
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

export default Level;
