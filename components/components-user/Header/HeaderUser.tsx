import React, { useEffect, useState } from "react";
import CustomSelect from "../CustomSelect";
import { Button, Input, Tooltip } from "@mantine/core";
import CustomSelectAcount from "../CustomSelectAcount";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  PiGearLight,
  PiBellLight,
  PiUserCircleLight,
  PiEyeClosedLight,
} from "react-icons/pi";
import { CgMenuLeft } from "react-icons/cg";
import { useRouter } from "next/router";
import Link from "next/link";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { AiOutlineBarChart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "@/reducers/slices/sideBarSlice";

interface Menu {
  link: string;
  name: string;
}
const HeaderUser = () => {
  const MenusVipMember: Menu[] = [
    {
      link: "/user/vip-member/general",
      name: "General",
    },
    {
      link: "/user/vip-member/commission",
      name: "Commission",
    },
    {
      link: "/user/vip-member/network",
      name: "Network Management",
    },
    {
      link: "/user/vip-member/upgrade",
      name: "Upgrade Vip Level",
    },
  ];
  const MenusWallet: Menu[] = [
    {
      link: "/user/wallet/main",
      name: "Main Wallet",
    },
    {
      link: "/user/wallet/exchange",
      name: "Exchange Wallet",
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState<number | null>();
  const router = useRouter();
  const isVipMemberPage = router.pathname.startsWith("/user/vip-member/");
  const isWalletPage = router.pathname.startsWith("/user/wallet/");
  const isDashBoardPage = router.pathname.startsWith("/user/dashboard");
  const isProfilePage = router.pathname.startsWith("/user/profile");
  const isQuickDepositPage = router.pathname.startsWith("/user/quick-deposit");
  const isOrderPage = router.pathname.startsWith("/user/order");
  const [showQuickDeposit, setShowQuickDeposit] = useState(false);

  const currentMenus = isWalletPage ? MenusWallet : MenusVipMember;
  useEffect(() => {
    const currentMenu = currentMenus.findIndex((menu) =>
      router.pathname.startsWith(menu.link)
    );
    setSelectedMenu(currentMenu);
  }, [router.pathname, currentMenus]);

  const dispatch = useDispatch();
  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="md:w-full h-auto md:pl-3 md:pb-3 md:px-0 px-2 py-2 flex justify-between items-start bg-transparent  dark:bg-black md:dark:bg-transparent">
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
      ) : isDashBoardPage ? (
        <div className="text-lg font-medium md:block hidden">BO Statistics</div>
      ) : isProfilePage ? (
        <div className="text-lg font-medium md:block hidden">User Profile</div>
      ) : (
        <div className="md:block hidden">
          <CustomSelect />
        </div>
      )}

      <div
        onClick={handleToggleSideBar}
        className={`md:hidden ${
          isVipMemberPage ||
          isWalletPage ||
          isDashBoardPage ||
          isProfilePage ||
          isQuickDepositPage ||
          isOrderPage
            ? "hidden"
            : "flex"
        } flex justify-center items-center gap-2`}
      >
        <CgMenuLeft className="w-[40px] h-[40px] cursor-pointer" />
        <h1 className="font-bold text-base">Trade</h1>
      </div>
      <div
        className={`md:hidden ${
          isVipMemberPage ||
          isWalletPage ||
          isDashBoardPage ||
          isProfilePage ||
          isQuickDepositPage ||
          isOrderPage
            ? "hidden"
            : "flex"
        } justify-center items-center gap-2`}
      >
        <CustomSelectAcount />
        <PiBellLight className="w-[40px] h-[40px]" />
      </div>

      {isVipMemberPage ||
      isWalletPage ||
      isDashBoardPage ||
      isProfilePage ||
      isQuickDepositPage ||
      isOrderPage ? (
        <div className="w-full md:hidden block">
          <div className="w-[100%] md:hidden flex justify-between items-center py-2">
            <div
              onClick={handleToggleSideBar}
              className="flex justify-center items-center gap-1"
            >
              <VscChevronLeft className="w-4 h-4" />
              <AiOutlineBarChart className="w-6 h-6" />
            </div>
            <h1 className="font-bold text-sm">
              {isWalletPage
                ? "Wallet"
                : isVipMemberPage
                ? "Vip Member"
                : isProfilePage
                ? "Profile"
                : isQuickDepositPage
                ? "Deposit"
                : isOrderPage
                ? "Trading History"
                : "DashBoard"}
            </h1>
            <div className="flex justify-center items-center gap-1">
              <p className="font-medium text-sm">Back</p>
              <VscChevronRight className="w-4 h-4" />
            </div>
          </div>
          {isVipMemberPage && (
            <div className="w-full px-2 mt-2 flex justify-between items-center text-textGray text-[10px] font-medium">
              {currentMenus.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className={`py-1 transition-colors duration-200 ease-in-out  ${
                    selectedMenu === index &&
                    "border-b border-primaryLight text-primaryLight"
                  } `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
          {isWalletPage && (
            <div className="w-full px-2 mt-2">
              <div className="px-4 py-7 rounded-[10px] bg-primaryLight dark:bg-primary text-white dark:text-black">
                <p className="text-lg font-medium">Total Assets (USDT)</p>
                <div className="flex md:justify-center justify-start items-center gap-4 mt-2">
                  <p className="text-4xl font-medium">$15,243.56</p>
                  <PiEyeClosedLight className="w-5 h-5" />
                </div>
              </div>
              <div className="w-full px-2 mt-6 flex justify-center items-center text-textGray text-[10px] font-bold">
                {currentMenus.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className={`py-1 flex-1 transition-colors text-center duration-200 ease-in-out ${
                      selectedMenu === index &&
                      "border-t-2 border-primaryLight text-primaryLight"
                    } `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="md:flex hidden justify-center items-start gap-6">
        <div className="flex gap-4 justify-center items-center">
          <CustomSelectAcount />
          <Button
            onClick={() => setShowQuickDeposit(true)}
            className="w-[140px] h-[40px] text-white dark:text-black rounded-xl capitalize text-sm font-bold bg-primaryLight dark:bg-primary"
          >
            quick deposit
          </Button>
        </div>
        <div className="flex justify-center items-center gap-3 h-[40px] cursor-pointer">
          <div className="flex flex-col justify-center items-center h-full">
            <PiGearLight className="w-[30px] h-[30px]" />
            <p className="font-medium text-xs text-textGray">Setting</p>
          </div>

          <div className="flex flex-col justify-center items-center h-full">
            <PiBellLight className="w-[30px] h-[30px]" />
            <p className="font-medium text-xs text-textGray">Notification</p>
          </div>

          <Link
            href={"/user/profile"}
            className={`flex flex-col justify-center items-center h-full  ${
              isProfilePage
                ? "text-primaryLight dark:text-primary"
                : "text-textGray"
            }`}
          >
            <PiUserCircleLight className="w-[30px] h-[30px]" />
            <p className="font-medium text-xs">Profile</p>
          </Link>
        </div>

        <div className="w-[25px] h-[25px] flex justify-center items-center bg-white dark:bg-bgColorIcon rounded-full cursor-pointer">
          <BiDotsVerticalRounded className="w-3 h-3" />
        </div>
      </div>
      {showQuickDeposit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setShowQuickDeposit(!showQuickDeposit)}
            className="absolute inset-0 bg-gray-950 opacity-50"
          ></div>
          <div className="bg-white dark:bg-black dark:border dark:border-gray-300 z-[999] p-4 w-[400px] h-[350px] rounded-xl">
            <div>
              <p className="text-black dark:text-text_2 font-medium text-sm text-left mb-2">
                Choose Wallet
              </p>
              <div className="bg-white dark:bg-bgColorBox border border-text_2 rounded-[5px] px-2 py-1 flex justify-between items-center">
                <p className="font-bold text-primaryLight dark:text-primary text-2xl">
                  T
                </p>
                <p className="text-sm font-medium">0.00</p>
              </div>
            </div>
            <div className="mt-2">
              <Input.Wrapper
                id="input-demo"
                label={
                  <label className="text-black dark:text-text_2 font-medium text-sm mb-2">
                    Deposit Amount
                  </label>
                }
              >
                <Input
                  id="input-deposit"
                  placeholder="Please enter amount"
                  rightSection={
                    <Tooltip
                      label="This is public"
                      position="top-end"
                      withArrow
                    >
                      <div className="text-primaryLight dark:text-primary font-medium text-sm">
                        All
                      </div>
                    </Tooltip>
                  }
                />
              </Input.Wrapper>
            </div>
            <div className="mt-3">
              <p className="text-black dark:text-text_2 font-medium text-sm text-left">
                Total Receive Amount
              </p>
              <h1 className="text-center text-3xl text-black dark:text-white font-medium mt-3">
                $0.00
              </h1>
            </div>
            <button className="rounded-[5px] w-full py-3 text-white dark:text-black bg-primaryLight dark:bg-primary text-sm font-medium mt-3">
              Deposit Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderUser;
