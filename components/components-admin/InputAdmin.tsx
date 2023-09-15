import React, { ReactNode } from "react";
import { Input, Tooltip } from "@mantine/core";

interface CustomInputProps {
  label: string | ReactNode;
  placeholder: string;
  rightSection?: string | null;
}

const InputAdmin: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  rightSection,
}) => {
  const renderRightSection = () => {
    if (rightSection === "dollar") {
      return (
        <Tooltip label="This is public" position="top-end" withArrow>
          <div className="text-textGray dark:text-text_2 font-normal text-sm">
            $
          </div>
        </Tooltip>
      );
    } else if (rightSection === "percent") {
      return (
        <Tooltip label="This is public" position="top-end" withArrow>
          <div className="text-textGray dark:text-text_2 font-normal text-sm">
            %
          </div>
        </Tooltip>
      );
    } else {
      return null;
    }
  };

  return (
    <Input.Wrapper
      id="input-demo"
      label={
        <label className="text-textGray dark:text-text_2 font-normal">
          {label}
        </label>
      }
    >
      <Input
        id="input-demo"
        placeholder={placeholder}
        rightSection={renderRightSection()}
      />
    </Input.Wrapper>
  );
};

export default InputAdmin;
