import Image from "next/image";
import React from "react";
import catAvt from "../../public/admin_images/avt_admin.svg";
import { FiChevronDown } from "react-icons/fi";
import { Avatar } from "@mantine/core";
import { useRouter } from "next/router";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../component-logo/Logo";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "@/reducers/slices/sideBarSlice";
import { BsChevronLeft } from "react-icons/bs";

const HeaderAdmin = () => {
  const router = useRouter();
  const isAnalyticsPage = router.pathname.startsWith("/admin/analytics");
  const isAllCountPage = router.pathname.startsWith("/admin/all-account");
  const isAccountVerifyPage = router.pathname.startsWith(
    "/admin/account-verify"
  );
  const isDepositPage = router.pathname.startsWith("/admin/deposit");
  const isWithdrawPage = router.pathname.startsWith("/admin/withdraw");
  const isTransactionsPage = router.pathname.startsWith("/admin/transactions");
  const isOrdersPage = router.pathname.startsWith("/admin/orders");
  const isTranfersPage = router.pathname.startsWith("/admin/tranfers");
  const isBalancerPage = router.pathname.startsWith("/admin/balancer");
  const isSettingsPage = router.pathname.startsWith("/admin/settings");
  const dispatch = useDispatch();
  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="w-full">
      <div className="w-full hidden h-14 rounded-[10px] cursor-pointer shadow-xl bg-white dark:bg-bgBoxDark dark:border dark:border-text_4 md:flex justify-end items-center px-4 gap-3">
        <p className="font-medium text-sm">Kha My</p>
        <Image
          className="w-10 h-10 object-cover"
          src={catAvt}
          alt="avt_admin"
        />
        <FiChevronDown />
      </div>
      <div className="md:hidden block px-2 py-2 bg-transparent">
        {isAnalyticsPage ? (
          <div className="flex justify-between items-center w-full">
            <Logo />
            <CiMenuFries
              className="w-7 h-7 cursor-pointer"
              onClick={handleToggleSideBar}
            />
          </div>
        ) : (
          <div className="flex justify-between items-center md:hidden">
            <div
              onClick={handleToggleSideBar}
              className="flex justify-center items-center gap-1"
            >
              <BsChevronLeft className="w-4 h-4" />
              <p className="font-medium text-sm text-black dark:text-white">
                Back
              </p>
            </div>
            <p className="font-bold text-sm text-black dark:text-white mr-6">
              {isAllCountPage
                ? "All Acount"
                : isAccountVerifyPage
                ? "Account Verify"
                : isDepositPage
                ? "Deposit"
                : isWithdrawPage
                ? "Withdraw"
                : isTransactionsPage
                ? "Transactions"
                : isOrdersPage
                ? "Orders"
                : isTranfersPage
                ? "Tranfers"
                : isBalancerPage
                ? "Balancer"
                : "Settings"}
            </p>
            <CiMenuFries
              className="w-7 h-7 cursor-pointer"
              onClick={handleToggleSideBar}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAdmin;
