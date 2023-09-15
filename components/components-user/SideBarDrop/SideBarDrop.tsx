import React, { useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { BsChevronRight, BsPersonVcard } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { TfiDashboard } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import Logo from "@/components/component-logo/Logo";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSideBarOpen,
  toggleSideBar,
} from "@/reducers/slices/sideBarSlice";

const SideBarDrop = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      link: "/user/trade",
      title: "Trade",
      icon: AiOutlineLineChart,
    },
    {
      link: "/user/wallet/Main",
      title: "Wallet",
      icon: CiWallet,
    },
    {
      link: "/user/vip-member/General",
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
  const isVipMemberPage = router.pathname.startsWith("/user/vip-member/");
  const isWalletPage = router.pathname.startsWith("/user/wallet/");

  const isSideBarOpen = useSelector(selectIsSideBarOpen);
  const dispatch = useDispatch();
  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div
      className={`${isSideBarOpen ? "block" : "hidden"} md:block fixed ${
        open ? "md:w-[265px] w-screen" : "md:w-20"
      } dark:bg-bgHeader bg-white h-screen pt-6 relative duration-300 top-0 left-0`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`absolute z-50 md:flex hidden bg-white dark:bg-bgColorIcon shadow-md justify-center items-center cursor-pointer -right-3 top-8 w-[30px] h-[30px] rounded-full ${
          !open && "rotate-180"
        }`}
      >
        <BsChevronLeft className="text-sm font-bold z-50" />
      </div>

      <div className="flex pl-6 gap-x-4 items-center justify-between">
        <div className={`origin-left duration-200 ${!open && "scale-0"}`}>
          <Logo />
        </div>
        <div
          onClick={handleToggleSideBar}
          className="flex justify-center items-center gap-2 mr-4 md:hidden"
        >
          <p>Back</p>
          <BsChevronRight className="text-sm font-bold z-50" />
        </div>
      </div>
      <ul className="pt-7">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex pl-6 py-4 w-full cursor-pointer hover:bg-light-white  items-center gap-x-4 
           ${
             (isVipMemberPage && Menu.title === "Vip Member") ||
             (isWalletPage && Menu.title === "Wallet") ||
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
              onClick={handleToggleSideBar}
            >
              <Menu.icon className="w-[20px] h-[20px] font-bold" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-medium text-sm leading-[18.42px]`}
              >
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 w-full border-t-2 py-6 border-textGray text-black dark:text-white">
        <Link
          className="flex w-full justify-start items-center gap-4 px-6"
          href="/"
        >
          <FiLogOut className="w-[20px] h-[20px] font-bold" />
          <span
            className={`${
              !open && "hidden"
            } origin-left duration-200 font-medium text-sm leading-[18.42px]`}
          >
            Log out
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideBarDrop;
