import React, { useRef } from "react";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { AnimatedWoman } from "../models/Animated_Woman";
import { useFrame } from "@react-three/fiber";

const Emma = () => {
  const emma = useRef();
  const johnQuestActive = store((state) => state.johnQuestActive);
  const emmaTextShowing = store((state) => state.emmaTextShowing);
  const emmaQuestActive = store((state) => state.emmaQuestActive);

  const handleClickEmma = () => {
    if (emmaTextShowing) return;
    if (!emmaQuestActive) return;
    store.setState({ emmaTextShowing: true });
  };

  return (
    <group
      ref={emma}
      position={[4.5, -0.9, 4.5]}
      rotation={[0, Math.PI, 0]}
      onClick={handleClickEmma}
      onPointerOver={() => {
        if (!emmaTextShowing && emmaQuestActive)
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <AnimatedWoman scale={0.75} />
      {!emmaTextShowing && emmaQuestActive && !johnQuestActive && (
        <Html wrapperClass="bulle" center position={[0, 2, 0]} occlude>
          Emma veut vous parler
        </Html>
      )}
    </group>
  );
};

export default Emma;
