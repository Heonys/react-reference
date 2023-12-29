import React, { createContext, useContext, useEffect, useState } from "react";
import { EventBus } from "../../pages/EventBusPage";

const AuthContext = createContext<any>({});
AuthContext.displayName = "AuthContext";

type Props = {
  children: React.ReactNode;
  eventBus: EventBus;
};

export const AuthProvider = ({ children, eventBus }: Props) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    eventBus.listen(() => {
      setUser("");
    });
  }, [eventBus]);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
};

/* 
최상위 컴포넌트에서 인스턴스를 만들고 
useEffect를 통해서 이벤트 리스너를 등록한다음에 
나중에 원하는 시점에서 해당 인스턴스를 통해서 이벤트를 실행하기 
*/
