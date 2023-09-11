import React, { useEffect, useState } from "react";
import CustomSelect from "../CustomSelect";
import { Button } from "@mantine/core";
import CustomSelectAcount from "../CustomSelectAcount";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiGearLight, PiBellLight, PiUserCircleLight } from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";
import { useRouter } from "next/router";
import Link from "next/link";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { AiOutlineBarChart } from "react-icons/ai";

interface Menu {
  link: string;
  name: string;
}
const HeaderUser = () => {
  const MenusVipMember: Menu[] = [
    {
      link: "/user/vip-member/General",
      name: "General",
    },
    {
      link: "/user/vip-member/Commission",
      name: "Commission",
    },
    {
      link: "/user/vip-member/Network",
      name: "Network Management",
    },
    {
      link: "/user/vip-member/Upgrade",
      name: "Upgrade Vip Level",
    },
  ];
  const MenusWallet: Menu[] = [
    {
      link: "/user/wallet/Main",
      name: "Main Wallet",
    },
    {
      link: "/user/wallet/Exchange",
      name: "Exchange Wallet",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState<number | null>();
  const router = useRouter();
  const isVipMemberPage = router.pathname.startsWith("/user/vip-member/");
  const isWalletPage = router.pathname.startsWith("/user/wallet/");
  const currentMenus = isWalletPage ? MenusWallet : MenusVipMember;
  useEffect(() => {
    const currentMenu = currentMenus.findIndex((menu) =>
      router.pathname.startsWith(menu.link)
    );
    setSelectedMenu(currentMenu);
  }, [router.pathname, currentMenus]);
  return (
    <div className="md:w-full h-auto md:pl-3 md:pb-3 md:px-0 px-2 py-2 flex justify-between items-start md:bg-transparent bg-white dark:bg-bgColorIcon md:dark:bg-transparent">
      {isVipMemberPage || isWalletPage ? (
        <div
          className="md:flex hidden justify-center items-center w-auto h-auto bg-colorMenuNavigate rounded-3xl cursor-pointer
      dark:border-2 dark:border-text_4
      "
        >
          {currentMenus.map((menu, index) => (
            <Link
              href={menu.link}
              key={index}
              className={`flex flex-grow p-1 `}
              onClick={() => setSelectedMenu(index)}
            >
              <div
                className={`text-sm font-medium leading-[18.42px] flex-grow flex justify-center px-2 py-2 rounded-3xl bg-transparent transition-colors duration-300 ease-in-out
              ${
                selectedMenu === index
                  ? "bg-white dark:bg-bgColorIcon dark:text-white"
                  : "dark:text-textGray"
              }`}
              >
                {menu.name}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="md:block hidden">
          <CustomSelect />
        </div>
      )}

      <div
        className={`md:hidden ${
          isVipMemberPage ? "hidden" : "flex"
        } flex justify-center items-center gap-2`}
      >
        <CgMenuLeft className="w-[40px] h-[40px] cursor-pointer" />
        <h1 className="font-bold text-base">Trade</h1>
      </div>
      <div
        className={`md:hidden ${
          isVipMemberPage ? "hidden" : "flex"
        } justify-center items-center gap-2`}
      >
        <CustomSelectAcount />
        <PiBellLight className="w-[40px] h-[40px]" />
      </div>

      {isVipMemberPage && (
        <div>
          <div className="w-full md:hidden flex justify-between items-center">
            <div className="flex justify-center items-center gap-1">
              <VscChevronLeft className="w-4 h-4" />
              <AiOutlineBarChart className="w-6 h-6" />
            </div>
            <h1 className="font-bold text-sm">Vip Member</h1>
            <div className="flex justify-center items-center gap-1">
              <p className="font-medium text-sm">Back</p>
              <VscChevronRight className="w-4 h-4" />
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      )}
      <div className="md:flex hidden justify-center items-start gap-6">
        <div className="flex gap-4 justify-center items-center">
          <CustomSelectAcount />
          <Button className="w-[140px] h-[40px] text-white dark:text-black rounded-xl capitalize text-sm font-bold bg-primaryLight dark:bg-primary">
            quick deposit
          </Button>
        </div>
        <div className="flex justify-center items-center gap-3 h-[40px]">
          <div className="flex flex-col justify-center items-center h-full">
            <PiGearLight className="w-[30px] h-[30px]" />
            <p className="font-medium text-xs text-textGray">Setting</p>
          </div>

          <div className="flex flex-col justify-center items-center h-full">
            <PiBellLight className="w-[30px] h-[30px]" />
            <p className="font-medium text-xs text-textGray">Notification</p>
          </div>

          <div className="flex flex-col justify-center items-center h-full">
            <PiUserCircleLight className="w-[30px] h-[30px]" />
            <p className="font-medium text-xs text-textGray">Profile</p>
          </div>
        </div>

        <div className="w-[25px] h-[25px] flex justify-center items-center bg-white dark:bg-bgColorIcon rounded-full cursor-pointer">
          <BiDotsVerticalRounded className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
export default HeaderUser;
