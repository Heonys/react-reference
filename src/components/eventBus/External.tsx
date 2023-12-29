import React from "react";
import { EventBus } from "../../pages/EventBusPage";

type Props = {
  eventBus: EventBus;
};

const External = ({ eventBus }: Props) => {
  const handleClick = () => {
    eventBus.emit();
  };

  return <button onClick={handleClick}>reset</button>;
};

export default External;
