// @ts-nocheck
import React from "react";

const MyReact = (function () {
  const memorizedValue = [];
  const isInitalized = [];
  let cursor = 0;

  const useState = (defaultValue) => {
    if (!isInitalized[cursor]) {
      memorizedValue[cursor] = defaultValue;
      isInitalized[cursor] = true;
    }
    const { forceUpdate } = useForceUpdate();

    const prevState = memorizedValue[cursor];
    const setStateAt = (_cursor) => (nextState) => {
      if (nextState === prevState) return;
      memorizedValue[_cursor] = nextState;
      forceUpdate();
    };
    const setState = setStateAt(cursor);
    cursor += 1;
    return [prevState, setState];
  };

  const useForceUpdate = () => {
    const [value, setValue] = React.useState(0);
    const forceUpdate = () => {
      cursor = 0;
      setValue(value + 1);
    };
    return { forceUpdate };
  };

  return { useState };
})();

export { MyReact };
