import React from "react";

const MyReact = (function MyReact() {
  const memorizedStates = [];
  const isInitalized = [];
  const deps = [];
  const cleanups = [];
  let cursor = 0;

  const useState = (initalValue = "") => {
    const { forceUpdate } = useForceUpdata();

    if (!isInitalized[cursor]) {
      memorizedStates[cursor] = initalValue;
      isInitalized[cursor] = true;
    }

    const state = memorizedStates[cursor];

    const setStateAt = (_cursor) => (nextState) => {
      if (state === nextState) return;
      memorizedStates[_cursor] = nextState;
      forceUpdate();
    };

    const setState = setStateAt(cursor);

    cursor += 1;

    return [state, setState];
  };

  function useForceUpdata() {
    const [value, setValue] = React.useState(0);
    const forceUpdate = () => {
      setValue(value + 1);
      cursor = 0;
    };
    return { forceUpdate };
  }

  function useEffect(effect, nextDeps) {
    function runDeferedEffect() {
      function runEffect() {
        const cleanup = effect();
        if (cleanup) cleanups[cursor] = cleanup;
      }
      const ENOUGH_TIME_TO_RENDER = 1;
      setTimeout(runEffect, ENOUGH_TIME_TO_RENDER);
    }

    if (!isInitalized[cursor]) {
      isInitalized[cursor] = true;
      deps[cursor] = nextDeps;
      cursor += 1;
      runDeferedEffect();
      return;
    }
    const prevDeps = deps[cursor];
    const depsSame = prevDeps.every((prevDep, index) => prevDep === nextDeps[index]);
    if (depsSame) {
      cursor += 1;
      return;
    }
    deps[cursor] = nextDeps;
    cursor += 1;
    runDeferedEffect();
  }

  function resetCursor() {
    cursor = 0;
  }

  function cleanupEffects() {
    cleanups.forEach((cleanup) => cleanup());
  }

  return { useState, useEffect, resetCursor, cleanupEffects };
})();

export default MyReact;
