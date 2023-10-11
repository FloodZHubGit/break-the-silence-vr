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
  const leftController = useController("left");

  // Get the player object from the XR context
  const { player } = useXR();

  // Define a speed factor
  const speed = 0.1;

  // Update the player's position on every frame
  useFrame(() => {
    console.log(leftController);
    // Check if the left controller is connected and has axes
    if (leftController && leftController.axes) {
      // Get the horizontal and vertical values of the joystick
      const [x, y] = leftController.axes;

      // Move the player along the x and z axes according to the joystick values
      player.position.x += x * speed;
      player.position.z += y * speed;
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
