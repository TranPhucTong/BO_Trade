import React, { useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { BsPersonVcard } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { TfiDashboard } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import Logo from "@/components/component-logo/Logo";
import Link from "next/link";
import { useTheme } from "next-themes";

const SideBarDrop = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      link: "/user/trade",
      title: "Trade",
      icon: AiOutlineLineChart,
    },
    {
      link: "/user/wallet",
      title: "Wallet",
      icon: CiWallet,
    },
    {
      link: "/user/vip-member",
      title: "Vip Member",
      icon: BsPersonVcard,
    },
    {
      link: "/user/dashboard",
      title: "DashBoard",
      icon: TfiDashboard,
    },
  ];
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div
      className={`hidden md:block fixed ${
        open ? "w-[285px]" : "w-20"
      } dark:bg-bgHeader bg-white min-h-screen pt-6 relative duration-300 top-0 left-0`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`absolute z-50 flex bg-white dark:bg-bgColorIcon shadow-md justify-center items-center cursor-pointer -right-3 top-8 w-[30px] h-[30px] rounded-full ${
          !open && "rotate-180"
        }`}
      >
        <BsChevronLeft className="text-sm font-bold z-50" />
      </div>

      <div className="flex pl-6 gap-x-4 items-center">
        <div className={`origin-left duration-200 ${!open && "scale-0"}`}>
          <Logo />
        </div>
      </div>
      <ul className="pt-7">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex pl-6 py-4 w-full cursor-pointer hover:bg-light-white  items-center gap-x-4 
           ${
             router.pathname === Menu.link
               ? `border-r-[3px] ${
                   theme === "dark"
                     ? "border-primary text-primary"
                     : "border-primaryLight text-primaryLight"
                 }`
               : "text-textGray"
           }
          
            `}
          >
            <Link
              className="flex w-full justify-start items-center gap-4"
              href={Menu.link}
            >
              <Menu.icon className="w-[30px] h-[30px] font-bold" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-medium text-base leading-[20.42px]`}
              >
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full border-t-2 py-10 border-textGray text-black dark:text-white">
        <Link
          className="flex w-full justify-start items-center gap-4 px-6"
          href="/"
        >
          <FiLogOut className="w-[30px] h-[30px] font-bold" />
          <span
            className={`${
              !open && "hidden"
            } origin-left duration-200 font-medium text-base leading-[20.42px]`}
          >
            Log out
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideBarDrop;
