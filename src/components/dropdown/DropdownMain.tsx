import React, { ReactNode } from "react";
import { Item, Menu, Trigger } from "./index";
import styled from "@emotion/styled";
import { DropdownProvider } from "./useDropdownContext";

type Props = {
  children: ReactNode;
  label: string;
  onChange: (...args: any) => any;
  value: any;
};

const Container = styled.div``;

const DropdownMain = ({ children, label, onChange, value }: Props) => {
  return (
    <Container>
      <DropdownProvider>
        <div>{label}</div>
        {children}
      </DropdownProvider>
    </Container>
  );
};

const Dropdown = Object.assign(DropdownMain, {
  Item,
  Menu,
  Trigger,
});

export default Dropdown;
