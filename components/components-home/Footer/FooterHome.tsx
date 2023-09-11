import coppyrightDark from "../../../public/images/copyright.svg";
import coppyrightLight from "../../../public/images/copyrightLight.svg";
import logoSvg from "../../../images/Logo.svg";
import logoSingle from "../../../public/images/Logo.svg";
import Logo from "@/components/component-logo/Logo";
import Image from "next/image";
import { useTheme } from "next-themes";

const FooterHome = () => {
  const { theme } = useTheme();
  const coppyright = theme === "dark" ? coppyrightDark : coppyrightLight;
  return (
    <footer className="header md:w-full flex md:flex-row w-full justify-between items-center md:px-[50px] md:pb-10 px-6 py-10">
      <div className="w-full md:flex hidden md:justify-between md:items-center">
        <div className="p-4 flex gap-2 border-l-[2px] border-primaryLight dark:border-primary">
          <Image
            src={coppyright}
            className="w-[20px] h-[20px] object-cover"
            alt=""
          />
          <p className="font-normal text-xl leading-[20px]">
            2023 AdTrade - Lorem ipsum
          </p>
        </div>
        <div className="cursor-pointer mr-20">
          <Logo />
        </div>
        <div className="p-4 flex gap-8 border-l-[2px] border-primary">
          <p className="font-normal cursor-pointer text-xl leading-[20px]">
            VIP Obligations
          </p>
          <p className="font-normal cursor-pointer text-xl leading-[20px]">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="md:hidden w-full flex justify-center items-center gap-6">
        <Image
          src={logoSingle}
          className="w-[45px] h-[42px] object-cover"
          alt=""
        />
        <div className="border-l-[2px] border-primary px-6 flex flex-col items-start gap-2">
          <div className="flex justify-center items-center gap-4 text-left">
            <p className="font-normal cursor-pointer text-[12px] leading-[15.31px]">
              VIP Obligations
            </p>
            <p className="font-normal cursor-pointer text-[12px] leading-[15.31px]">
              Privacy Policy
            </p>
          </div>
          <div className="flex gap-2 items-end text-left">
            <Image
              src={coppyright}
              className="w-[20px] h-[20px] object-cover"
              alt=""
            />
            <p className="font-normal text-[12px] leading-[15.31px]">
              2023 AdTrade - Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
