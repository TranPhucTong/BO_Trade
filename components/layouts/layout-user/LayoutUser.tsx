import HeaderUser from "@/components/components-user/Header/HeaderUser";
import SideBarDrop from "@/components/components-user/SideBarDrop/SideBarDrop";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

type LayoutAdminProps = {
  children: ReactNode;
};

const LayoutUser = ({ children }: LayoutAdminProps) => {
  return (
    <div className="flex w-full overflow-hidden">
      <SideBarDrop />
      <div className="flex-grow md:py-4 md:px-3 md:h-screen h-auto">
        <HeaderUser />
        <div className="w-full">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
