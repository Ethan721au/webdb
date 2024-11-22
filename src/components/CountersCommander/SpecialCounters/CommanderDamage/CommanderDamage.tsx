// import styles from "./commanderDamage.module.css";
"use client";

import { useReset } from "@/hooks/useReset";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CommanderDamageButton = styled.button<{
  layout: { top?: string; right?: string; bottom?: string; left?: string };
  active?: string;
}>`
  border: 1px solid red;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  transform: ${(p) =>
    p.active === "true"
      ? "scale(5) rotate(90deg) translate(50%, 50%)"
      : "rotate(90deg)"};
  transition: all 0.3s;
  position: absolute;
  top: ${({ layout }) => layout.top};
  right: ${({ layout }) => layout.right};
  bottom: ${({ layout }) => layout.bottom};
  left: ${({ layout }) => layout.left};
  cursor: pointer;
  background-color: black;
  z-index: ${({ active }) => (active === "true" ? "2" : "1")};
  display: flex;
  justify-content: ${({ active }) =>
    active === "true" ? "space-around" : "center"};
  align-items: center;
`;

const Increment = styled.div<{
  active: string;
}>`
  display: ${(p) => (p.active === "true" ? "block" : "none")};
`;

const CommanderDamageCount = {
  opponent1: 0,
  opponent2: 0,
  opponent3: 0,
};

export default function CommanderDamage({
  player,
  display,
}: {
  player?: string;
  display?: boolean;
}) {
  const { reset } = useReset();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(CommanderDamageCount);

  useEffect(() => {
    setValue(CommanderDamageCount);
  }, [reset]);

  useEffect(() => {
    setActive(false);
  }, [display]);

  return (
    <>
      <CommanderDamageButton
        layout={{ top: "20%", right: "20%" }}
        active={active.toString()}
        onClick={(e) => {
          setActive(!active);
          e.stopPropagation();
        }}
      >
        <Increment
          active={active.toString()}
          onClick={(e) => {
            e.stopPropagation();
            setValue((prevState) => {
              return {
                ...prevState,
                opponent1:
                  prevState.opponent1 <= 0 ? 0 : prevState.opponent1 - 1,
              };
            });
          }}
        >
          -
        </Increment>
        {value.opponent1}
        <Increment
          active={active.toString()}
          onClick={(e) => {
            e.stopPropagation();
            setValue((prevState) => {
              return {
                ...prevState,
                opponent1: prevState.opponent1 + 1,
              };
            });
          }}
        >
          +
        </Increment>
      </CommanderDamageButton>
      <CommanderDamageButton
        layout={{
          top: player === "bottomRight" ? "74.5%" : "20%",
          left: "10%",
        }}
      >
        {value.opponent2}
      </CommanderDamageButton>
      <CommanderDamageButton layout={{ bottom: "20%", right: "20%" }}>
        {value.opponent3}
      </CommanderDamageButton>
    </>
  );
}
