import React, { useRef } from "react";
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
import { Plane } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <TeleportationPlane leftHand rightHand />
      <Controllers />
      <ambientLight intensity={1} />
      <Plane args={[10, 10, 10, 10]} rotation-x={-Math.PI / 2} position-y={-1}>
        <meshBasicMaterial wireframe color="red" />
      </Plane>
      {/* <group position={[5, -0.1, -5]}>
        <Office />
      </group> */}
      {/* <RayGrab>
        <John />
      </RayGrab>
      <Emma />
      <Phone /> */}

      {/* <Interface /> */}
    </>
  );
};
