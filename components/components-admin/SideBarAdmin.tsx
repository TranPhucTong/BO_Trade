import Image from "next/image";
import React from "react";
import Logo from "../component-logo/Logo";
import { AiOutlineControl } from "react-icons/ai";
import { RiListUnordered } from "react-icons/ri";
import { TbHomeMove } from "react-icons/tb";
import { BsCurrencyDollar } from "react-icons/bs";
import { TfiDashboard } from "react-icons/tfi";
import { TbArrowAutofitDown } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import { FiUsers, FiSettings } from "react-icons/fi";
import { TbReplaceOff } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBarAdmin = () => {
  const MenusTransaction = [
    {
      link: "/admin/deposit",
      title: "Deposit",
      icon: BsCurrencyDollar,
    },
    {
      link: "/admin/withdraw",
      title: "Withdraw",
      icon: TbArrowAutofitDown,
    },
    {
      link: "/admin/transactions",
      title: "Transactions",
      icon: AiOutlineControl,
    },
    {
      link: "/admin/orders",
      title: "Orders",
      icon: RiListUnordered,
    },
    {
      link: "/admin/tranfers",
      title: "Tranfers",
      icon: TbHomeMove,
    },
  ];
  const MenusAccount = [
    {
      link: "/admin/all-account",
      title: "All Account",
      icon: FiUsers,
    },
    {
      link: "/admin/account-verify",
      title: "Account Verify",
      icon: BiUserCheck,
    },
  ];
  const MenusTool = [
    {
      link: "/admin/balancer",
      title: "Balancer",
      icon: TbReplaceOff,
    },
    {
      link: "/admin/settings",
      title: "Settings",
      icon: FiSettings,
    },
  ];

  const router = useRouter();

  return (
    <div className="flex">
      <div
        className={` w-64 bg-white dark:bg-bgBoxDark
      bg-dark-purple h-screen p-3 pt-8 relative duration-300 dark:border-r-2 dark:border-text_4`}
      >
        <div className="flex gap-x-4 items-center">
          <Logo />
        </div>
        <div className="pt-7">
          <p className="text-xs font-medium text-textGray">Dashboard</p>
          <ul className="mt-1">
            <li
              className={`flex p-3 ${
                router.pathname === "/admin/analytics" &&
                "bg-primaryLight dark:bg-text_4 text-white"
              } rounded-xl w-full cursor-pointer hover:bg-light-white  items-center gap-x-4 
            `}
            >
              <Link
                className="flex w-full justify-start items-center gap-4"
                href="/admin/analytics"
              >
                <MdOutlineAnalytics className="w-[20px] h-[20px] font-bold" />
                <span
                  className={`origin-left duration-200 font-medium text-sm leading-[18.42px]`}
                >
                  Analytics
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-xs font-medium text-textGray">Account</p>
          <ul className="mt-1">
            {MenusAccount.map((Menu, index) => (
              <li
                key={index}
                className={`flex p-3 ${
                  router.pathname === Menu.link &&
                  "bg-primaryLight dark:bg-text_4 text-white"
                } rounded-xl w-full cursor-pointer hover:bg-light-white  items-center gap-x-4 
            `}
              >
                <Link
                  className="flex w-full justify-start items-center gap-4"
                  href={Menu.link}
                >
                  <Menu.icon className="w-[20px] h-[20px] font-bold" />
                  <span
                    className={`origin-left duration-200 font-medium text-sm leading-[18.42px]`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-xs font-medium text-textGray">
            Transaction Histories
          </p>
          <ul className="mt-1">
            {MenusTransaction.map((Menu, index) => (
              <li
                key={index}
                className={`flex p-3 ${
                  router.pathname === Menu.link &&
                  "bg-primaryLight dark:bg-text_4 text-white"
                } w-full rounded-xl  cursor-pointer hover:bg-light-white  items-center gap-x-4 
            `}
              >
                <Link
                  className="flex w-full justify-start items-center gap-4"
                  href={Menu.link}
                >
                  <Menu.icon className="w-[20px] h-[20px] font-bold" />
                  <span
                    className={`origin-left duration-200 font-medium text-sm leading-[18.42px]`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <p className="text-xs font-medium text-textGray">Tools</p>
          <ul className="mt-1">
            {MenusTool.map((Menu, index) => (
              <li
                key={index}
                className={`flex p-3 ${
                  router.pathname === Menu.link &&
                  "bg-primaryLight dark:bg-text_4 text-white"
                } w-full rounded-xl cursor-pointer hover:bg-light-white  items-center gap-x-4 
            `}
              >
                <Link
                  className="flex w-full justify-start items-center gap-4"
                  href={Menu.link}
                >
                  <Menu.icon className="w-[20px] h-[20px] font-bold" />
                  <span
                    className={`origin-left duration-200 font-medium text-sm leading-[18.42px]`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
