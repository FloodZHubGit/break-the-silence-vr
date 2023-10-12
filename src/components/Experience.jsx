import React, { useRef } from "react";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import Phone from "./phone/Phone";
import {
  RayGrab,
  useXR,
  Controllers,
  useController,
  Interactive,
} from "@react-three/xr";
import Interface from "./Interface";
import { useFrame } from "@react-three/fiber";
import ConversationJohn from "./john/ConversationJohn";

export const Experience = () => {
  return (
    <>
      <Controllers />
      <ambientLight intensity={1} />
      <group position={[5, -0, -5]}>
        <Office />
      </group>
      <Interactive
        onSelect={() => {
          store.setState({ johnTextShowing: true });
        }}
      >
        <John />
      </Interactive>
      <ConversationJohn />
      <Emma />
      <Phone />

      <Interface />
    </>
  );
};
