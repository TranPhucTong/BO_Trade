import Image from "next/image";
import React from "react";
import catAvt from "../../public/admin_images/avt_admin.svg";
import { FiChevronDown } from "react-icons/fi";
import { Avatar } from "@mantine/core";

const HeaderAdmin = () => {
  return (
    <div className="w-full h-14 rounded-[10px] cursor-pointer shadow-xl bg-white dark:bg-bgBoxDark dark:border dark:border-text_4  flex justify-end items-center px-4 gap-3">
      <p className="font-medium text-sm">Kha My</p>
      <Image className="w-10 h-10 object-cover" src={catAvt} alt="avt_admin" />
      <FiChevronDown />
    </div>
  );
};

export default HeaderAdmin;
