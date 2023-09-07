import lineDark from "../../../public/images/LineDark.svg";
import linePhoneDark from "../../../public/images/LineDarkPhone.svg";
import lineLight from "../../../public/images/LineLight.svg";
import linePhoneLight from "../../../public/images/LineLightPhone.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const Line = () => {
  const { theme } = useTheme();
  const line = theme === "dark" ? lineDark : lineLight;
  const linePhone = theme === "dark" ? linePhoneDark : linePhoneLight;
  return (
    <>
      <Image
        src={line}
        className="w-full md:block hidden md:py-16"
        alt="LinePC"
      />
      <Image
        src={linePhone}
        className="w-full md:hidden block py-16"
        alt="LinePhone"
      />
    </>
  );
};

export default Line;
