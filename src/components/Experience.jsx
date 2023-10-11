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
  useTeleportation,
} from "@react-three/xr";
import Interface from "./Interface";
import { Plane, Sky } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export const Experience = () => {
  const xr = useThree((it) => it.gl.xr);
  const teleport = useTeleportation();
  const isTeleported = useRef(false);

  useFrame(() => {
    if (!isTeleported.current && xr.getReferenceSpace()) {
      isTeleported.current = true;
      teleport(new Vector3(0, 0, 0));
    }
  });
  return (
    <>
      {/* <TeleportationPlane leftHand rightHand />
      <Controllers />
      <ambientLight intensity={1} /> */}
      {/* <group position={[5, -0.1, -5]}>
        <Office />
      </group> */}
      {/* <RayGrab>
        <John />
      </RayGrab>
      <Emma />
      <Phone /> */}
      {/* <Interface /> */}

      <TeleportationPlane leftHand rightHand />
      <Sky sunPosition={[0, 1, 0]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Controllers />
      <Plane args={[10, 10, 10, 10]} rotation-x={-Math.PI / 2} position-y={-1}>
        <meshBasicMaterial wireframe color="red" />
      </Plane>
    </>
  );
};
