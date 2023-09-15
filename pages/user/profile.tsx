import EditProfileForm from "@/components/components-user/components-profile/EditProfileForm";
import UploadImage from "@/components/components-user/components-profile/UploadImage";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Profile() {
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <div className="bg-white dark:bg-[#151818] dark:border-text_4 border border-text_2 rounded-[10px] w-[800px] h-auto">
        <div className="px-4 py-2 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
          <p className="text-sm text-black dark:text-text_2 font-medium">
            Edit Profile
          </p>
          <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer text-textGray" />
        </div>
        <div className="py-2 px-4 flex justify-center items-start gap-4">
          <div className="w-[15%] mt-4">
            <UploadImage />
          </div>

          <div className="w-[85%]">
            <EditProfileForm />
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-4">
        <div className="bg-white dark:bg-[#151818] dark:border-text_4 border border-text_2 rounded-[10px]">
          <div className="px-4 py-2 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
            <p className="text-sm text-black dark:text-text_2 font-medium">
              Verification Account
            </p>
            <div className="flex justify-center items-center gap-1 px-4 py-1 bg-colorMenuNavigate rounded-lg text-[#7bccc5]">
              <p className="font-medium text-sm">Verified</p>
              <BsCheckCircleFill className="w-4 h-4" />
            </div>
          </div>
          <div className="px-4 py-4">
            <p className="font-normal text-sm text-textGray">
              To keep your assets safe, we need to verify your <br /> identity.
              Please fill in the information correctly, once <br /> the identity
              verification is completed, the information <br /> cannot be edited
              anymore.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#151818] dark:border-text_4 border border-text_2 rounded-[10px]">
          <div className="py-2 px-4 border-b border-text_2 dark:border-text_4 flex justify-between items-center">
            <p className="text-sm border-black dark:text-text_2 font-medium">
              Security
            </p>
            <BiDotsVerticalRounded className="w-5 h-5 cursor-pointer text-textGray" />
          </div>
          <div className="px-4 py-4 flex justify-between items-center">
            <p className="font-normal text-sm text-textGray w-[218px]">
              Do you want to change your password?
              <span className="text-primaryLight dark:text-primary">
                Move to the bottom to change.
              </span>
            </p>
            <button className="p-2 bg-primaryLight dark:bg-primary text-white dark:text-black rounded-lg">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default profile;
