import quotationDark from "../../../public/images/Advan/“.svg";
import quotationLight from "../../../public/images/Advan/quoLight.svg";
import register from "../../../public/images/Step/register 3.svg";
import learn from "../../../public/images/Step/reading-book 3.svg";
import invest from "../../../public/images/Step/investment-2 3.svg";
import withDraw from "../../../public/images/Step/withdraw 3.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

interface CardInfo {
  image: string;
  title: string;
  content: string;
}

const Steps = () => {
  const cardData: CardInfo[] = [
    {
      image: register,
      title: "Register",
      content: "Create an account and start using the platform right away.",
    },
    {
      image: learn,
      title: "Learn About The Platform",
      content:
        "See how to invest without risking your money while practicing on a demo account.",
    },
    {
      image: invest,
      title: "Invest For Profit",
      content: "Choose 1 type of asset to invest profitably.",
    },
    {
      image: withDraw,
      title: "Quick Withdrawal",
      content: "You can withdraw money to your account whenever you want.",
    },
  ];
  const { theme } = useTheme();
  const quotation = theme === "dark" ? quotationDark : quotationLight;
  return (
    <div className="w-full flex flex-col gap-24 h-auto md:px-[50px] md:py-[60px] px-6 py-10">
      <div className="text-left">
        <Image
          className=" object-cover w-[78px] h-auto bg-transparent"
          src={quotation}
          alt="quotation"
        />
        <h1 className="py-8 text-[40px] leading-[52px] font-bold capitalize">
          Start trading <br />
          and earn in 4 steps
        </h1>
        <div className="border-t-[3px] w-[136px] dark:border-primary border-primaryLight"></div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 w-full">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-[357px] h-[252px] rounded-[40px] dark:bg-bgColorBox bg-bgColorBoxLight dark:border-b-transparent hover:border-b-[4px] border-primaryLight flex flex-col"
          >
            <div className="p-6 flex flex-col justify-center items-start text-left gap-7">
              <div className="flex gap-2 items-end">
                <Image
                  className="w-[50px] h-[50px] object-cover"
                  src={item.image}
                  alt="quality"
                />
                <p className="font-bold text-[25px] leading-[30px]">
                  0{index + 1},
                </p>
              </div>

              <h3 className="font-bold text-[20px] leading-[26px]">
                {item.title}
              </h3>
              <p className="font-normal text-xl leading-[20.42px] text-textGray">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
