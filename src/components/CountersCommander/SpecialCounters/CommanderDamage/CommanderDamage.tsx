// import styles from "./commanderDamage.module.css";
"use client";

import { useState } from "react";
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
      ? "scale(5) rotate(90deg) translate(45%, 45%)"
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
`;

export default function CommanderDamage({ player }: { player?: string }) {
  const [active, setActive] = useState(false);
  const value = 5;

  return (
    <>
      <CommanderDamageButton
        layout={{ top: "20%", right: "20%" }}
        active={active.toString()}
        onClick={() => setActive(!active)}
      >
        {value}
      </CommanderDamageButton>
      <CommanderDamageButton
        layout={{
          top: player === "bottomRight" ? "74.5%" : "20%",
          left: "10%",
        }}
      >
        {value}
      </CommanderDamageButton>
      <CommanderDamageButton layout={{ bottom: "20%", right: "20%" }}>
        {value}
      </CommanderDamageButton>
    </>
  );
}
