import React from "react";
import { useDropDown } from "./useDropdownContext";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

type Props = {
  as?: (...args: any) => any;
};

const Trigger = ({ as }: Props) => {
  const { setIsOpen, selected } = useDropDown();
  return (
    <Container>
      <span>{selected}</span>
      <button onClick={() => setIsOpen((prev) => !prev)}>⬇️</button>
    </Container>
  );
};

export default Trigger;
