"use client";
import { useTheme } from "next-themes";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Switch, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isChecked]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative w-auto h-auto">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-[26px] w-[51px] rounded-full ${
              isChecked ? "bg-primary" : "bg-black"
            }`}
          ></div>
          <div
            className={`absolute left-3 top-1 flex h-[17px] w-[17px] items-center justify-center rounded-full  transition ${
              isChecked
                ? "translate-x-full bg-black"
                : "bg-white -translate-x-2"
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default ThemeSwitcher;
