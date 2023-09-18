import HeaderAdmin from "@/components/components-admin/HeaderAdmin";
import SideBarAdmin from "@/components/components-admin/SideBarAdmin";
import HeaderUser from "@/components/components-user/Header/HeaderUser";
import { selectIsSideBarOpen } from "@/reducers/slices/sideBarSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";

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
        className={`flex-grow md:py-4 md:px-3 md:h-screen h-auto main-content`}
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
