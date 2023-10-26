import React, { ReactNode } from "react";
import { useDropDown } from "./useDropdownContext";

type Props = {
  children: ReactNode;
};

const Item = ({ children }: Props) => {
  const { setSelected, setIsOpen } = useDropDown();

  return (
    <div
      onClick={() => {
        setSelected(children?.toString()!);
        setIsOpen((prev) => !prev);
      }}
    >
      {children}
    </div>
  );
};

export default Item;
