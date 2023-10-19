import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number = 500) => {
  const [debouceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouceValue;
};

export default useDebounce;
