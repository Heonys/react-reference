import { createRef, useImperativeHandle, useState } from "react";

const ref = createRef();

const Counter = () => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => count);

  const clickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={clickHandle}>++</button>
    </div>
  );
};

export const getCount = () => ref.current;

export default Counter;

/* 
외부의 리액트 컴포넌트가 아닌 일반 js파일에서도 ref.current로 해당 리액트 컴포넌트의 state에 접근이 가능하다
*/
