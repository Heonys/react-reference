import { ReactElement, createContext, useContext, useState } from "react";

const CustomContext = createContext({});

export const CustomProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState();

  return <CustomContext.Provider value={{ user }}>{children}</CustomContext.Provider>;
};

export const useCustom = () => {
  return useContext(CustomContext);
};
