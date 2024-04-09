import React from "react";

const Line = ({ width }) => {
  return (
    <div className="w-full h-[8px]  bg-[#e7e7e6] rounded-[12px]">
      <div
        className={` h-full rounded-[12px] bg-[#199d7c]`}
        style={{ width: width }}
      ></div>
    </div>
  );
};

export default Line;
