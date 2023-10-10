import React, { useRef } from "react";
import { PhoneModel } from "../models/PhoneModel";
import store from "../../stores/store";
import { RayGrab } from "@react-three/xr";

export default function Phone() {
  const phone = useRef();
  const phoneQuestActive = store((state) => state.phoneQuestActive);
  const phoneMenuShowing = store((state) => state.phoneMenuShowing);
  const emmaQuest2Done = store((state) => state.emmaQuest2Done);

  const handleClickPhone = () => {
    if (!phoneQuestActive) return;
    if (phoneMenuShowing) return;
    store.setState({ phoneMenuShowing: true });
  };

  return (
    <>
      {!emmaQuest2Done && (
        <group
          ref={phone}
          position={[4.5, 0.85, 0.7]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.5}
          onPointerOver={() => {
            if (phoneQuestActive && !phoneMenuShowing)
              document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          onClick={handleClickPhone}
        >
          <RayGrab>
            <PhoneModel />
          </RayGrab>
        </group>
      )}
    </>
  );
}
