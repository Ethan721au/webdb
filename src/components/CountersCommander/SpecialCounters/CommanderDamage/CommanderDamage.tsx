// import styles from "./commanderDamage.module.css";
import styled from "styled-components";

const CommanderDamageButton = styled.button<{
  layout: { top?: string; right?: string; bottom?: string; left?: string };
}>`
  border: 1px solid red;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  transform: rotate(90deg);
  position: absolute;
  top: ${(props) => props.layout.top};
  right: ${(props) => props.layout.right};
  bottom: ${(props) => props.layout.bottom};
  left: ${(props) => props.layout.left};
`;

export default function CommanderDamage({ player }: { player?: string }) {
  const value = 5;

  return (
    <>
      <CommanderDamageButton layout={{ top: "20%", right: "20%" }}>
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
