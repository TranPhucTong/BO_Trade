import HeaderAdmin from "@/components/components-admin/HeaderAdmin";
import SideBarAdmin from "@/components/components-admin/SideBarAdmin";
import HeaderUser from "@/components/components-user/Header/HeaderUser";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

type LayoutAdminProps = {
  children: ReactNode;
};

const LayoutAdmin = ({ children }: LayoutAdminProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="flex w-full overflow-hidden">
      <div>
        <SideBarAdmin />
      </div>
      <div
        className={`flex-grow md:py-4 md:px-3 md:h-screen h-auto main-content ${
          isSideBarOpen ? "hidden" : ""
        }`}
      >
        <HeaderAdmin />
        <div className="w-full mt-4">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
