import React, { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

const dropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
  selected: "",
  setSelected: () => {},
});

const useDropdownProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <dropdownContext.Provider value={{ isOpen, setIsOpen, selected, setSelected }}>
      {children}
    </dropdownContext.Provider>
  );
};

const useDropDown = () => {
  return useContext(dropdownContext);
};

export { useDropdownProvider as DropdownProvider, useDropDown };
