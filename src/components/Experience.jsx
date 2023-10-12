import React, { useRef } from "react";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import Phone from "./phone/Phone";
import { RayGrab, useXR, Controllers, useController } from "@react-three/xr";
import Interface from "./Interface";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
  const {
    // An array of connected `XRController`
    controllers,
    // Whether the XR device is presenting in an XR session
    isPresenting,
    // Whether hand tracking inputs are active
    isHandTracking,
    // A THREE.Group representing the XR viewer or player
    player,
    // The active `XRSession`
    session,
    // `XRSession` foveation. This can be configured as `foveation` on <XR>. Default is `0`
    foveation,
    // `XRSession` reference-space type. This can be configured as `referenceSpace` on <XR>. Default is `local-floor`
    referenceSpace,
  } = useXR();

  const leftController = useController("left");

  useFrame(() => {
    if (leftController) {
      const { axes } = leftController.inputSource.gamepad;
      const [x, y] = axes;

      player.position.z -= y * 0.1;
      player.position.x -= x * 0.1;
    }
  });

  return (
    <>
      <Controllers />
      <ambientLight intensity={1} />
      <group position={[5, -0, -5]}>
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
