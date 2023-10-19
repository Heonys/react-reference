import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
  items: number[];
};

const itemSize = 100;

const Container = styled.div`
  overflow-y: scroll;
  width: 500px;
  margin: 0 auto;
  height: 100vh;
  position: "relative";
`;

const Recyclerview = ({ items }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop } = containerRef.current;

      const newStartIdx = Math.floor(scrollTop / itemSize);
      const visibleItemsCount = Math.ceil(window.innerHeight / itemSize) + 10;
      setStartIndex(newStartIdx);
      setEndIndex(newStartIdx + visibleItemsCount);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <ul
        css={css`
          height: ${items.length * itemSize}px;
          position: relative;
        `}
      >
        {items.slice(startIndex, endIndex).map((item, index) => {
          return (
            <li
              css={css`
                list-style-type: none;
                height: ${itemSize}px;
                position: absolute;
                top: ${(startIndex + index) * itemSize}px;
              `}
              key={index}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  startIndex + index + 1
                }.png`}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Recyclerview;
