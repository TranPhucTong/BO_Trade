import quotationDark from "../../../public/images/Advan/“.svg";
import quotationLight from "../../../public/images/Advan/quoLight.svg";
import noMoney from "../../../public/images/Advan/no-money 2.svg";
import fund from "../../../public/images/Advan/fund 1.svg";
import candlestick from "../../../public/images/Advan/candlestick-chart 1.svg";
import moneyExchange from "../../../public/images/Advan/money-exchange-2 2.svg";
import time from "../../../public/images/Advan/24-7 1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface CardInfo {
  image: string;
  title: string;
  content: string;
}

const Advantages = () => {
  const cardData: CardInfo[] = [
    {
      image: noMoney,
      title: "Demo account 10.000USD",
      content: "Test your investment strategy with a demo account.",
    },
    {
      image: fund,
      title: "Start with numbers small capital from 5$",
      content: "You can start trading when you deposit from 5$ or more.",
    },
    {
      image: moneyExchange,
      title: "Transaction value from 1$",
      content:
        "With an investment of just $1 per trade, you can make a profit in the market.",
    },
    {
      image: candlestick,
      title: "Transaction unlimited",
      content:
        "Unlimited number of trades offers unique experiences and helps to achieve the best profits.",
    },
    {
      image: time,
      title: "Trade every day of the week",
      content:
        "Take advantage of every potential trading opportunity on a daily basis with a 24/7 trading platform.",
    },
  ];
  const { theme } = useTheme();
  const quotation = theme === "dark" ? quotationDark : quotationLight;
  return (
    <div className="w-full h-auto px-6 py-10 md:px-[100px] md:py-[40px] gap-14 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-4 justify-center items-start md:items-center">
        <Image
          className=" object-cover w-[50px] h-auto bg-transparent"
          src={quotation}
          alt="quotation"
        />
        <h1 className="text-[30px] leading-[42px] md:text-center text-left w-full capitalize font-bold">
          Advantages when <br className="md:hidden block" /> dealing{" "}
          <br className="md:block hidden" />
          with AdTrade
        </h1>
        <div className="border-t-[3px] w-[136px] dark:border-primary border-primaryLight"></div>
      </div>
      <Swiper
        className="md:w-full w-[85%] flex md:justify-between justify-center items-center"
        spaceBetween={0}
        pagination={{ clickable: true }}
        freeMode
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {cardData.map((item, index) => (
          <SwiperSlide
            className="flex justify-center md:justify-center md:items-start items-center"
            key={index}
          >
            <div className="w-[250px] h-[350px] rounded-[40px] cursor-pointer text-black dark:text-white dark:bg-bgColorBox bg-white dark:hover:bg-primary hover:bg-primaryLight dark:hover:text-black hover:text-white">
              <div className="p-8 text-left flex flex-col gap-4">
                <div className="w-[60px] h-[60px] flex justify-center items-center  rounded-xl bg-bgColorIconLight dark:bg-bgColorIcon">
                  <Image className="object-cover" src={item.image} alt="" />
                </div>
                <h2 className="font-bold text-[18px] leading-[24px]">
                  {item.title !== "Transaction unlimited" ? (
                    item.title
                  ) : (
                    <div>
                      Transaction <br /> unlimited
                    </div>
                  )}
                </h2>
                <p className="font-normal text-sm leading-[18px]">
                  {item.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Advantages;
