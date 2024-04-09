import React, { useState } from "react";
import Line from "./common/Line";
import Heading from "./common/Heading";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Button from "./common/Button";
import Defaultbtn from "./common/Defaultbtn";
import { describetab } from "./common/Helper";

const Describe = ({ next, setNext }) => {
  const [describe, setDescribe] = useState("");

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="flex mt-[60px] gap-2 items-center ">
        <div className="text-[32px] hidden cursor-pointer hover:text-yellow-300 duration-700">
          <MdOutlineKeyboardArrowLeft />
        </div>
        <Line width="20%" />
      </div>
      <Heading
        Heading="Which describe you best ?"
        para="This will help us personalize your experience."
      />
      <div className="w-full flex flex-col gap-3 items-center mt-[60px]">
        {describetab.map((items, index) => (
          <div
            onClick={() => setDescribe(items.name)}
            key={index}
            className={`max-w-[560px] hover:border-yellow-200 hover:shadow-xl cursor-pointer  w-full mx-auto rounded-[12px] border border-[#e4e5e5] px-5 py-3 flex items-center gap-3 ${
              describe === items.name ? " shadow-2xl  border-yellow-200" : ""
            }`}
          >
            <div className="text-[38px]">{items.icon}</div>
            <p className="text-black text-[16px] sm:text-[22px] line-clamp-1 leading-[110%] font-medium font-poppins">
              {items.name}
              <span className="text-[#676667]"> {items.span_name}</span>
            </p>
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

export default Describe;
