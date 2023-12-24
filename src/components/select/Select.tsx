import React from "react";
import styled from "styled-components";

const theme = {
  fontSize: {
    default: "16px",
    small: "14px",
    large: "18px",
  },
  color: {
    white: "#FFFFFF",
    black: "#000000",
  },
};

type Theme = typeof theme;
type Color = keyof Theme["color"];
type FontSize = keyof Theme["fontSize"];

type StyledProps = {
  color: Color;
  fontSize: FontSize;
};

const StyledSelect = styled.select<StyledProps>`
  color: ${({ color }) => theme.color[color]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
`;

type NativeSelectProps = React.ComponentPropsWithoutRef<"select">;

type SelectProps<OptionType> = {
  options: OptionType;
  selectedOption?: Exclude<keyof OptionType, Symbol>;
  onChange: (state: keyof OptionType) => void;
} & Omit<NativeSelectProps, "onChange" | "value"> &
  Partial<StyledProps>;

const Select = <OptionType extends Record<string, string>>({
  options,
  selectedOption,
  onChange,
  color = "black",
  fontSize = "default",
  ...restProps
}: SelectProps<OptionType>) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledSelect
      onChange={handleSelectChange}
      value={selectedOption}
      color={color}
      fontSize={fontSize}
      {...restProps}
    >
      {Object.entries(options).map(([key, value]) => {
        return <option key={key}>{value}</option>;
      })}
    </StyledSelect>
  );
};

export default Select;
