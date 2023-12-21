import React, { useState } from "react";
import Select from "./Select";

const fruits = {
  apple: "사과",
  banana: "바나나",
  orange: "오렌지",
};

export type Fruit = keyof typeof fruits;

const FruitSelect = () => {
  const [fruit, setFruit] = useState<Fruit | undefined>();

  return (
    <Select
      id="fruitSelect"
      className="fruitSelctBox"
      options={fruits}
      selectedOption={fruit}
      onChange={setFruit}
    />
  );
};

export default FruitSelect;
