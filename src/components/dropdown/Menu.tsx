import React, { ReactNode } from "react";
import { useDropDown } from "./useDropdownContext";

type Props = {
  children: ReactNode;
};

const Menu = ({ children }: Props) => {
  const { isOpen } = useDropDown();
  return <>{isOpen && <div>{children}</div>}</>;
};

export default Menu;
