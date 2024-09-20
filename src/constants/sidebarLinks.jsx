// import { IMAGES } from "../assets";
import { AiFillAppstore } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { PiUsers } from "react-icons/pi";
import { IoCodeSlash } from "react-icons/io5";
import { BsClipboardData } from "react-icons/bs";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { GiNewspaper } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

export const sidebar_links = [
  {
    key: "dashboard",
    label: "Dashboard",
    // icon: <img src={IMAGES.dashboard_icon} alt="dashboard_icon" className="" />,
    icon:<BiSolidDashboard size={20}/>,
    path: "/app/dashboard",
  },
  {
    key: "connection",
    label: "Connections",
    icon: <PiUsers size={20}/>,
    path: "/app/connection-screen",
  },
  {
    key: "datasets",
    label: "Datasets",
    icon: <BsClipboardData size={20}/>,
    path: "/app/datasets",
  },
  {
    key: "code",
    label: "Code",
    icon: <IoCodeSlash size={20}/>,
    path: "/admin/students",
  },  
  {
    key: "learn",
    label: "Learn",
    icon: <PiGraduationCapDuotone size={20} />,
    path: "/app/courses",
  },  
  {
    key: "discussion",
    label: "Discussion",
    icon: <GoCommentDiscussion size={20} />,
    path: "/admin/students",
  },  
  {
    key: "news",
    label: "News & Updates",
    icon:<GiNewspaper size={20} />,
    path: "/admin/students",
  },  
  {
    key: "settings",
    label: "Settings",
    icon: <IoMdSettings size={20} />,
    path: "/app/settings",
  },
];
