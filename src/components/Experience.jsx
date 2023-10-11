import React, { useRef } from "react";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import Phone from "./phone/Phone";
import { RayGrab, TeleportationPlane, useXR } from "@react-three/xr";
import Interface from "./Interface";

export const Experience = () => {
  const office = useRef();

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

  console.log("controllers", controllers);
  console.log("player", player);

  // when joystick forward, move forward
  if (controllers[0]?.inputSource?.gamepad?.axes[3] === -1) {
    player.position.z += 0.1;
  }

  // when joystick backward, move backward
  if (controllers[0]?.inputSource?.gamepad?.axes[3] === 1) {
    player.position.z -= 0.1;
  }

  // when joystick left, move left
  if (controllers[0]?.inputSource?.gamepad?.axes[2] === -1) {
    player.position.x -= 0.1;
  }

  // when joystick right, move right
  if (controllers[0]?.inputSource?.gamepad?.axes[2] === 1) {
    player.position.x += 0.1;
  }

  return (
    <>
      <OrbitControls />
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

      {isPresenting && <TeleportationPlane referenceSpaceType="local-floor" />}
    </>
  );
};
