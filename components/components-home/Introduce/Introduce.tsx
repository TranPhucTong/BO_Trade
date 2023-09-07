import { Button } from "@mantine/core";
import chartIntroDark from "../../../public/images/Introduce/Chart.svg";
import netProfitDark from "../../../public/images/Introduce/Net Profit.png";
import amountDark from "../../../public/images/Introduce/Amount.png";
import chartIntroLight from "../../../public/images/Introduce/LightImage/Chart.svg";
import netProfitLight from "../../../public/images/Introduce/LightImage/Net Profit.png";
import amountLight from "../../../public/images/Introduce/LightImage/Amount.png";
import backTranLight from "../../../public/images/Introduce/LightImage/Polygon 1.svg";
import backLight from "../../../public/images/Introduce/LightImage/Polygon 2.svg";
import Image from "next/image";
import ButtonHome from "../ButtonHome/ButtonHome";
import { useTheme } from "next-themes";

const Introduce = () => {
  const { theme } = useTheme();
  const chartIntro = theme === "dark" ? chartIntroDark : chartIntroLight;
  const netProfit = theme === "dark" ? netProfitDark : netProfitLight;
  const amount = theme === "dark" ? amountDark : amountLight;
  return (
    <div className="w-full h-auto px-6 py-10 gap-8 flex flex-col justify-center items-center md:flex-row md:items-center md:px-[50px] md:py-[60px]">
      <div className="flex flex-col gap-10 items-start w-full md:w-[35%]">
        <div>
          <h1 className="font-bold text-left text-4xl leading-10 md:text-7xl md:leading-14">
            Earn <br />
            <span className="dark:text-primary text-primaryLight">
              Unlimited
            </span>{" "}
            <br />
            <span className="dark:text-primary text-primaryLight">
              Income
            </span>{" "}
            <br />
            In Minutes
          </h1>
        </div>
        <div>
          <p className="font-medium text-left text-lg leading-7 md:text-xl md:leading-9 text-textGray capitalize">
            AdTrade is committed to providing our{" "}
            <br className="md:hidden block" /> customers{" "}
            <br className="md:block hidden" /> with the best trading experience.
          </p>
        </div>
        <ButtonHome smallButton={false} text="Get Started for Free" />
        <div className="flex gap-4 justify-start items-center text-left w-full">
          <div className="flex flex-col text gap-2">
            <p className="font-bold text-xl">10 Years</p>
            <p className="font-normal md:text-base text-textGray text-[12px]">
              Trading Experience
            </p>
          </div>
          <div className="flex flex-col text gap-2">
            <p className="font-bold text-xl">24/7</p>
            <p className="font-normal md:text-base text-textGray text-[12px]">
              Online Support
            </p>
          </div>
          <div className="flex flex-col text gap-2">
            <p className="font-bold text-xl">25k+</p>
            <p className="font-normal md:text-base text-textGray text-[12px]">
              Satisfied Customers
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[65%] relative md:block hidden">
        <Image
          className="w-[90%] h-auto object-cover"
          src={chartIntro}
          alt="ChartIntroduce.png"
        />
        <Image
          className="absolute w-[419px] h-[119px] -top-16 right-0 object-cover"
          src={netProfit}
          alt="netProfit.png"
        />
        <Image
          className="absolute w-[324px] h-[258px] -bottom-[110px] right-0 object-cover"
          src={amount}
          alt="amount.png"
        />
        <Image
          className="dark:hidden absolute -z-10 w-auto h-auto -top-16 -left-8 object-cover"
          src={backTranLight}
          alt="backTranLight"
        />
        <Image
          className="dark:hidden absolute -z-10 w-auto h-auto -bottom-[110px] -left-8 object-cover"
          src={backLight}
          alt="backTranLight"
        />
      </div>
    </div>
  );
};

export default Introduce;
