import React, { useState } from "react";
import Select from "./Select";

const fruits = {
  apple: "사과",
  banana: "바나나",
  orange: "오렌지",
};

type Fruit = keyof typeof fruits;

const FruitSelect = () => {
  const [fruit, setFruit] = useState<Fruit | undefined>(undefined);
  return (
    <Select
      id="fruitSelect"
      className="fruitSelectBox"
      options={fruits}
      selectedOption={fruit}
      onChange={setFruit}
    />
  );
};

export default FruitSelect;
