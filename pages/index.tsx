import Image from "next/image";
import { Inter } from "next/font/google";
import Introduce from "@/components/components-home/Introduce/Introduce";
import Line from "@/components/components-home/Line/Line";
import Advantages from "@/components/components-home/Advantages/Advantages";
import Reason from "@/components/components-home/Reason/Reason";
import OurCurrencies from "@/components/components-home/OurCurrencies/OurCurrencies";
import Steps from "@/components/components-home/Steps/Steps";
import FeedBack from "@/components/components-home/FeedBack/FeedBack";
import ButtonHome from "@/components/components-home/ButtonHome/ButtonHome";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full">
      <Introduce />
      <Line />
      <Advantages />
      <Reason />
      <div className="md:hidden block">
        <Line />
      </div>
      <OurCurrencies />
      <div className="md:hidden block">
        <Line />
      </div>
      <Steps />
      <div className="md:hidden block">
        <Line />
      </div>
      <FeedBack />
      <Line />
    </div>
  );
}
