import React from "react";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import { useRef } from "react";
import Phone from "./phone/Phone";

export const Experience = () => {
  const office = useRef();

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <group ref={office} position={[5, -0.9, -5]}>
        <Office />
      </group>
      <John />
      <Emma />
      <Phone />
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[-4.9, 0.3, 3.45]}
        scale={1.2}
        rotation={[0, Math.PI / 2, 0]}
        occlude
      >
        <video src="FirstAidFail-TheOfficeUS.mp4" autoPlay muted loop />
      </Html>
    </>
  );
};
