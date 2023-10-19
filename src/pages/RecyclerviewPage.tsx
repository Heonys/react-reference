import React, { useEffect, useState } from "react";
import Recyclerview from "../components/Recyclerview";

const RecyclerviewPage = () => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const newItems = [];
    for (let i = 0; i < 1010; i++) {
      newItems.push(i);
    }
    setItems(newItems);
  }, []);

  return <Recyclerview items={items} />;
};

export default RecyclerviewPage;
