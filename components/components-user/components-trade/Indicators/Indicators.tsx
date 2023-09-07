import { Button } from "@mantine/core";
import React, { useState } from "react";
import oscilllators_light from "../../../../public/user_images/Indicators/oscillators.svg";
import summary_light from "../../../../public/user_images/Indicators/summary.svg";
import moving_light from "../../../../public/user_images/Indicators/moving averages.svg";
import oscilllators_dark from "../../../../public/user_images/Indicators/oscillators_dark.svg";
import summary_dark from "../../../../public/user_images/Indicators/summary_dark.svg";
import moving_dark from "../../../../public/user_images/Indicators/moving averages_dark.svg";
import result_light from "../../../../public/user_images/Indicators/Last Result.svg";
import result_dark from "../../../../public/user_images/Indicators/Last Result_dark.svg";

import Image from "next/image";
import { useTheme } from "next-themes";

const Indicators = () => {
  const [active, setActive] = useState(true);
  const { theme } = useTheme();
  const oscilllators =
    theme === "dark" ? oscilllators_dark : oscilllators_light;
  const summary = theme === "dark" ? summary_dark : summary_light;
  const moving = theme === "dark" ? moving_dark : moving_light;
  const result = theme === "dark" ? result_dark : result_light;
  return (
    <div className="p-2 w-full h-full">
      <div className="flex md:justify-between justify-start items-center">
        <div className="flex justify-center items-center">
          <div
            onClick={() => setActive(true)}
            className={`rounded-lg cursor-pointer font-bold md:text-[20px] text-[14px] ${
              active
                ? "bg-[#f3fafb] dark:bg-bgColorIcon text-black dark:text-white"
                : "text-textGray"
            }`}
          >
            <p className="md:px-8 px-5 md:py-2 py-1">Indicators</p>
          </div>
          <div
            onClick={() => setActive(false)}
            className={`rounded-lg cursor-pointer font-bold md:text-[20px] text-[14px] ${
              active
                ? "text-textGray"
                : "bg-[#f3fafb] dark:bg-bgColorIcon text-black dark:text-white"
            }`}
          >
            <p className="md:px-8 px-5 md:py-2 py-1">Last Result</p>
          </div>
        </div>
        {active ? (
          ""
        ) : (
          <div className="md:flex hidden justify-center items-center gap-2">
            <div className="w-[108px] h-[42px] bg-bgColorIconLight dark:bg-black rounded-xl flex justify-center items-center text-[20px] font-medium bg">
              <span className="text-primaryLight capitalize mr-2">buy</span> 66
            </div>
            <div className="w-[108px] h-[42px] bg-bgColorIconLight dark:bg-black rounded-xl flex justify-center items-center text-[20px] font-medium">
              <span className="text-redColor capitalize mr-2">sell</span> 29
            </div>
          </div>
        )}
      </div>
      {active ? (
        <div className="flex items-center md:mt-20 mt-5 gap-2 p-2 flex-row md:justify-center">
          <div className="flex-grow">
            <Image
              src={oscilllators}
              alt="oscilllators"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-grow mb-4 md:mb-12">
            <Image
              src={summary}
              alt="summary"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <Image
              src={moving}
              alt="moving"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="px-7 md:mt-40 mt-5">
          <div className="flex flex-grow">
            <Image
              src={result}
              alt="oscilllators"
              className="flex-grow object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Indicators;
