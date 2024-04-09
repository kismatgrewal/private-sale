import React, { useEffect } from "react";
import wait from "../Assets/img/loading.gif";
const Wait = ({ next, setNext }) => {
  useEffect(() => {
    setTimeout(() => {
      setNext(next + 1);
    }, 2000);
  }, [setNext]);

  return (
    <div className="w-full h-screen flex-col gap-4 flex items-center justify-center">
      <img src={wait} alt="wait" className="max-w-[200px] w-full" />
      <h1 className="sm:text-[32px] max-w-[1000px] text-center w-full text-[22px] text-black font-bold tracking-[1px] font-poppins leading-[120%]">
        Finding Learning path recommendations for you based on your responses
      </h1>
    </div>
  );
};

export default Wait;
