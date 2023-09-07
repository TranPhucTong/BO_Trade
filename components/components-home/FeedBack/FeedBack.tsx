import quotationDark from "../../../public/images/Advan/“.svg";
import quotationLight from "../../../public/images/Advan/quoLight.svg";
import { Button } from "@mantine/core";
import { AiFillStar } from "react-icons/ai";
import imgCustomer from "../../../public/images/FeedBack/custormerIMG.svg";
import quotesDark from "../../../public/images/FeedBack/”.svg";
import quotesLight from "../../../public/images/FeedBack/quoLight.svg";
import coin from "../../../public/images/FeedBack/coins-7 2.svg";
import bgImage from "../../../public/images/FeedBack/bgImage.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ButtonHome from "../ButtonHome/ButtonHome";
import { useTheme } from "next-themes";

interface CardCustomerInfo {
  imageAVT: string;
  name: string;
  content: string;
}

const FeedBack = () => {
  const cardData: CardCustomerInfo[] = [
    {
      imageAVT: imgCustomer,
      name: "Min Suga",
      content:
        "I have learned a lot from the financial markets thanks to this platform. Now I can invest and make money.",
    },
    {
      imageAVT: imgCustomer,
      name: "Kim Jisoo",
      content:
        "Fast, reputable trading platform. Been using for a while and very satisfied.",
    },
  ];
  const { theme } = useTheme();
  const quotation = theme === "dark" ? quotationDark : quotationLight;
  const quotes = theme === "dark" ? quotesDark : quotesLight;
  return (
    <div className="w-full h-auto md:px-[50px] md:py-[60px] px-6 py-10 gap-20 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-6 md:justify-center md:items-center justify-center items-start">
        <Image
          className=" object-cover w-auto h-auto bg-transparent"
          src={quotation}
          alt="quotation"
        />
        <h1 className="text-[40px] leading-[52px] md:text-center text-left font-bold capitalize">
          What our Customers Say
        </h1>
        <div className="border-t-[3px] w-[136px] dark:border-primary border-primaryLight"></div>
      </div>

      <div className="md:hidden flex w-full">
        <Swiper
          className="md:w-full w-full flex md:justify-between justify-center items-center"
          spaceBetween={10}
          autoplay={{ delay: 1000 }}
          freeMode
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide
              className="flex w-full justify-center md:justify-center md:items-start items-center"
              key={index}
            >
              <div className=" bg-bgColorBoxLight dark:bg-bgColorBox z-10 w-[100%] h-[280px] rounded-[40px] border-[1px] border-primary">
                <div className="p-6 flex flex-col justify-center items-start gap-8">
                  <div className="flex justify-center items-center gap-4">
                    <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                    <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                    <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                    <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                    <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                  </div>
                  <p className="font-normal text-xl leading-[20.42px] text-left">
                    {`"${item.content}"`}
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-4 justify-center items-center">
                      <Image
                        src={item.imageAVT}
                        alt="imgCustomer"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <h3 className="font-bold text-xl leading-[20.42px]">
                        {item.name}
                      </h3>
                    </div>
                    <Image
                      src={quotes}
                      className="w-auto h-[47px] object-cover"
                      alt="quotes"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex z-50 md:flex-row flex-col md:mt-32 w-full relative justify-between items-center">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="md:flex bg-bgColorBoxLight dark:bg-bgColorBlur hidden w-[482px] h-[222px] rounded-[40px] shadow-xl dark:border-[1px] dark:border-primary"
          >
            <div className="p-6 h-full flex flex-col justify-between items-start">
              <div className="flex justify-center items-center gap-4">
                <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
                <AiFillStar className="dark:text-primary text-primaryLight w-8 h-8" />
              </div>
              <p className="font-normal text-xl leading-[20.42px] text-left">
                {`"${item.content}"`}
              </p>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-4 justify-center items-center">
                  <Image
                    src={item.imageAVT}
                    alt="imgCustomer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h3 className="font-bold text-xl leading-[20.42px]">
                    {item.name}
                  </h3>
                </div>
                <Image
                  src={quotes}
                  className="w-auto h-[47px] object-cover"
                  alt="quotes"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="md:w-[760px] bg-transparent md:bg-primaryLight md:dark:bg-bgColorBlur text-white md:absolute -z-10 w-full md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:h-auto md:rounded-[40px]  md:border-[1px] dark:md:border-primary md:border-transparent">
          <div className="md:px-40 md:py-20 flex flex-col justify-center items-center w-full h-full gap-4">
            <div className="md:hidden block ">
              <Image src={coin} className="w-[50px] h-[50px]" alt="CoinImage" />
            </div>
            <h1 className="md:dark:text-primary text-primaryLight dark:text-primary md:text-white font-medium text-[40px] leading-[51px]">
              Create Account
            </h1>
            <p className="font-normal text-black md:text-white dark:text-white md:text-[20px] text-[14px] text-center leading-[17.36px] md:leading-[26px]">
              All the Lorem Ipsum generators on the Internet{" "}
              <br className="md:hidden block" /> tend to repeat predefined
              chunks as necessary.
            </p>
            <ButtonHome smallButton={false} text="Get Started for Free" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
