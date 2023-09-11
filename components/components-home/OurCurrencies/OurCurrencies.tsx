import quotation from "../../../public/images/Advan/“.svg";
import currentcies from "../../../public/images/Our Currencies/Group 38.svg";
import currentcies2 from "../../../public/images/Our Currencies/Group 39.svg";
import currentcies3 from "../../../public/images/Our Currencies/Group 40.svg";
import currentcies4 from "../../../public/images/Our Currencies/Group 41.svg";
import currentcies5 from "../../../public/images/Our Currencies/Group 42.svg";
import currentcies6 from "../../../public/images/Our Currencies/Group 43.svg";
import currentcies7 from "../../../public/images/Our Currencies/Group 44.svg";
import currentcies8 from "../../../public/images/Our Currencies/Group 45.svg";
import Image from "next/image";

const OurCurrencies = () => {
  return (
    <div className="w-full h-auto md:px-[100px] md:py-[90px] px-6 py-10">
      <div className="w-full md:hidden flex flex-col items-start pb-20 text-left">
        <Image
          className=" object-cover w-[68px] h-auto bg-transparent"
          src={quotation}
          alt="quotation"
        />
        <h1 className="py-8 text-[30px] leading-[42px] font-bold capitalize">
          Our Currencies
        </h1>
        <div className="border-t-[3px] w-[136px] border-primary"></div>
      </div>
      <div
        style={{ transform: "rotate(-2deg)" }}
        className="w-full relative flex justify-end  border-[1px] border-primary bg-primaryLight dark:bg-transparent h-[618px] rounded-[50px]"
      >
        <div className="w-[30%] md:flex hidden flex-col items-end text-left mt-28 mr-28">
          <Image
            className=" object-cover w-[68px] h-auto bg-transparent"
            src={quotation}
            alt="quotation"
          />
          <h1 className="py-8 text-[30px] leading-[42px] text-white font-bold capitalize">
            Our Currencies
          </h1>
          <div className="border-t-[3px] w-[136px] border-primary"></div>
        </div>
        <Image
          className="absolute bottom-4 left-1"
          src={currentcies}
          alt="iconCurrencies"
        />
        <Image
          className="absolute bottom-32 left-20"
          src={currentcies2}
          alt="iconCurrencies"
        />
        <Image
          className="absolute bottom-[256px] left-16"
          src={currentcies3}
          alt="iconCurrencies"
        />
        <Image
          className="absolute bottom-8 left-40"
          src={currentcies4}
          alt=""
        />
        <Image
          className="absolute bottom-[160px] md:left-72 right-6"
          src={currentcies5}
          alt="iconCurrencies"
        />
        <Image
          className="absolute bottom-0 md:left-80 right-5"
          src={currentcies6}
          alt=""
        />
        <Image
          className="absolute md:bottom-14 md:left-[500px] bottom-20 right-4"
          src={currentcies7}
          alt="iconCurrencies"
        />
        <Image
          className="absolute md:bottom-[300px] md:left-[480px] right-20 top-32"
          src={currentcies8}
          alt="iconCurrencies"
        />
      </div>
    </div>
  );
};

export default OurCurrencies;
