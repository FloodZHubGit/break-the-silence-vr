import React, { useRef } from "react";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import Phone from "./phone/Phone";
import {
  RayGrab,
  TeleportationPlane,
  useXR,
  Interactive,
  Controllers,
} from "@react-three/xr";
import Interface from "./Interface";

export const Experience = () => {
  const office = useRef();

  return (
    <>
      <TeleportationPlane leftHand rightHand />
      <Controllers />
      <ambientLight intensity={1} />
      <group ref={office} position={[5, 0, -5]}>
        <Office />
      </group>
      <RayGrab>
        <John />
      </RayGrab>
      <Emma />
      <Phone />

      <Interface />
    </>
  );
};
