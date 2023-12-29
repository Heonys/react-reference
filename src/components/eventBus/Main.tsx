import React from "react";
import { useAuth } from "./useAuth";
import { EventBus } from "../../pages/EventBusPage";

type Props = {
  eventBus: EventBus;
};
const EventBusPage = ({ eventBus }: Props) => {
  const { user, setUser } = useAuth();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleClick = () => {
    eventBus.emit();
  };

  return (
    <div>
      <input type="text" value={user} onChange={handleChange} />
      <button onClick={handleClick}>reset</button>
    </div>
  );
};

export default EventBusPage;
