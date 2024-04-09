import { FcBusinessman, FcBusinesswoman, FcManager } from "react-icons/fc";
import { GoGraph } from "react-icons/go";
import { PiTargetBold } from "react-icons/pi";
import { FaVolleyball } from "react-icons/fa6";
import { GiTargetShot } from "react-icons/gi";
import card1 from "../../Assets/img/Card1.png";
import card2 from "../../Assets/img/Card2.png";
import card3 from "../../Assets/img/card3.png";
import card4 from "../../Assets/img/Card4.png";
export const describetab = [
  {
    icon: <FcBusinessman />,
    name: "Student",
    span_name: "or soon to be enrolled",
  },
  {
    icon: <FcBusinesswoman />,
    name: "Professional",
    span_name: "pursuing a career",
  },
  {
    icon: <FcManager />,
    name: "parent",
    span_name: "of a school-age child",
  },
  {
    icon: <FcBusinessman />,
    name: "Lifelong learner",
    span_name: "",
  },
  {
    icon: <FcManager />,
    name: "Teacher",
    span_name: "",
  },
  {
    icon: <FcBusinesswoman />,
    name: "Other",
    span_name: "",
  },
];
export const cardmap = [
  {
    img: card1,
    name: "Arithmetic",
    des: "",
  },
  {
    img: card2,
    name: "Basic algebra",
    des: "",
  },
  {
    img: card3,
    name: "Intermediate algebra",
    des: "",
  },
  {
    img: card4,
    name: " calculus",
    des: "",
  },
];
export const BtnNavtab = [
  {
    icon: <GoGraph />,
    name: "Learning specific skills to advance my career",
  },
  {
    icon: <FaVolleyball />,
    name: "Exploring new topics i'm interested in",
  },
  {
    icon: <GiTargetShot />,
    name: "Refreshing my math foundation",
  },
  {
    icon: <PiTargetBold />,
    name: "Exercising my brain to stay sharp",
  },
  {
    icon: <GoGraph />,
    name: "Something else",
  },
];
