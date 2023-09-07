import quotationDark from "../../../public/images/Advan/“.svg";
import quotationLight from "../../../public/images/Advan/quoLight.svg";
import { Button } from "@mantine/core";
import quality from "../../../public/images/Reason/high-quality 1.svg";
import trader from "../../../public/images/Reason/trader 1.svg";
import withdrawal from "../../../public/images/Reason/money-withdrawal 1.svg";
import support from "../../../public/images/Reason/investor 1.svg";
import Image from "next/image";
import ButtonHome from "../ButtonHome/ButtonHome";
import { useTheme } from "next-themes";

interface CardInfo {
  image: string;
  title: string;
  content: string;
}

const Reason = () => {
  const cardData: CardInfo[] = [
    {
      image: quality,
      title: "Quality Foundation",
      content:
        "$10,000 demo account. Test your investment strategy with a demo account.",
    },
    {
      image: trader,
      title: "Easiest Way To Trade Cryptocurrencies",
      content:
        "AdTrade helps new traders achieve the same win rate as experienced traders.",
    },
    {
      image: withdrawal,
      title: "Easy Withdrawal",
      content: "Fast withdrawals with multiple payment systems available.",
    },
    {
      image: support,
      title: "Investor Support",
      content:
        "A team of local language experts are always ready to help you trade anytime, anywhere.",
    },
  ];
  const { theme } = useTheme();
  const quotation = theme === "dark" ? quotationDark : quotationLight;
  return (
    <div className="w-full h-auto md:px-[50px] md:py-[60px] px-6 py-6 flex md:flex-row flex-col  gap-16 md:justify-center md:items-center justify-center items-start">
      <div className="flex md:w-[50%] w-full flex-col justify-center items-start gap-16 text-left">
        <div className="w-full">
          <Image
            className=" object-cover w-[78px] h-auto bg-transparent"
            src={quotation}
            alt="quotation"
          />
          <h1 className="py-8 text-[40px] leading-[52px] w-full font-bold capitalize">
            Why should you choose <br className="md:hidden block" /> to
            <br className="md:block hidden" /> invest at AdTrade?
          </h1>
          <div className="border-t-[3px] w-[136px] dark:border-primary border-primaryLight"></div>
        </div>
        <p className="font-normal text-base text-textGray leading-[20.42px]">
          Pretium gravida nunc in adipiscing nec nibh. Massa ut etiam cursus
          elementum faucibus tellus est quis. Consectetur ipsum aliquet ornare
          tempor non iaculis vestibulum. Faucibus viverra libero malesuada quis
          tristique.
        </p>
        <div className="md:block hidden">
          <ButtonHome smallButton={false} text="Get Started for Free" />
        </div>
      </div>
      <div className="md:w-[50%] w-full flex justify-center items-center">
        <div className="md:w-full md:h-full w-auto h-auto grid md:grid-cols-2 grid-cols-1 gap-4 place-content-stretch">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="w-[340px] h-[261px] rounded-[40px] dark:bg-bgColorBox bg-bgColorBoxLight dark:border-b-transparent hover:border-b-[4px] border-primaryLight flex flex-col"
            >
              <div className="p-6 flex flex-col justify-between items-start text-left gap-8">
                <div className="flex gap-8 justify-center items-center">
                  <Image
                    className="w-[50px] h-[50px] object-cover"
                    src={item.image}
                    alt="quality"
                  />
                  <h3 className="font-bold text-[20px] leading-[26px]">
                    {item.title}
                  </h3>
                </div>
                <div className="border-t-[1px] w-[50px] dark:border-primary border-primaryLight"></div>
                <p className="font-normal text-xl leading-[20.42px] text-textGray">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden block w-auto">
        <ButtonHome smallButton={false} text="Get Started for Free" />
      </div>
    </div>
  );
};

export default Reason;
