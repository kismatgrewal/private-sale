import React from "react";

const Heading = ({ Heading, para }) => {
  return (
    <div className="text-center flex flex-col gap-2 sm:gap-6 mt-4 sm:mt-9">
      <h1 className="sm:text-[32px] text-[22px] text-black font-bold tracking-[1px] font-poppins leading-[120%]">
        {Heading}
      </h1>
      <p className="sm:text-[18px] text-[14px] text-[#5f5f5f] font-medium font-poppins leading-[110%]">
        {para}
      </p>
    </div>
  );
};

export default Heading;
