import React, { useState } from "react";
import Interested from "./Interested";
import Describe from "./Describe";
import Rightplace from "./Rightplace";
import Level from "./Level";
import Way from "./Way";
import Wait from "./Wait";
import Youranswer from "./Youranswer";

const Main = () => {
  const [next, setNext] = useState(1);
  return (
    <div className="px-3">
      {next === 1 && <Describe next={next} setNext={setNext} />}
      {next === 2 && <Interested next={next} setNext={setNext} />}
      {next === 3 && <Rightplace next={next} setNext={setNext} />}
      {next === 4 && <Level next={next} setNext={setNext} />}
      {next === 5 && <Way next={next} setNext={setNext} />}
      {next === 6 && <Wait next={next} setNext={setNext} />}
      {next === 7 && <Youranswer />}
    </div>
  );
};

export default Main;
