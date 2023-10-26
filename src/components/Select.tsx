import React from "react";
import Dropdown from "./dropdown/DropdownMain";

type Props = {
  label: string;
  options: string[];
  trigger?: (...args: any) => any;
  onChange: (...args: any) => any;
  value?: any;
};

const Select = ({ label, trigger, value, onChange, options }: Props) => {
  return (
    <Dropdown label={label} value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index}>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
