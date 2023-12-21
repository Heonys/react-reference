import React, { EventHandler, forwardRef } from "react";

type NativeButtonProps = React.ComponentPropsWithoutRef<"button">;

// type NativeButtonProps2 = React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >;
// type NativeButtonProps3 = React.ComponentPropsWithRef<"button">;
// type NativeButtonProps4 = React.HTMLProps<"button">; // 사용x

const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
  console.log(event.target);
};

const handleClick2: GlobalEventHandlers["onclick"] = (event) => {
  console.log(event.target);
};

const Button = forwardRef<HTMLButtonElement, NativeButtonProps>((props, ref) => {
  return (
    <button ref={ref} {...props} onClick={handleClick}>
      ++
    </button>
  );
});

export default Button;
