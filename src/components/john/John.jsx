import React, { useRef } from "react";
import { BusinessMan } from "../models/Business_Man";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { Interactive } from "@react-three/xr";

const John = () => {
  const john = useRef();
  const johnTextShowing = store((state) => state.johnTextShowing);
  const johnQuestActive = store((state) => state.johnQuestActive);

  const handleClickJohn = () => {
    if (johnTextShowing) return;
    if (!johnQuestActive) return;
    store.setState({ johnTextShowing: true });
  };

  return (
    <Interactive onSelect={handleClickJohn}>
      <group ref={john} position={[2.5, 0, 4.5]} rotation={[0, Math.PI, 0]}>
        <BusinessMan scale={0.75} />
        {!johnTextShowing && johnQuestActive && (
          <Html wrapperClass="bulle" center position={[0, 2, 0]} occlude>
            John veut vous parler
          </Html>
        )}
      </group>
    </Interactive>
  );
};

export default John;
