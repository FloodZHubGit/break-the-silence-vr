import React, { useRef } from "react";
import { PhoneModel } from "../models/PhoneModel";
import store from "../../stores/store";


export default function Phone() {
  const phone = useRef();
  const phoneQuestActive = store((state) => state.phoneQuestActive);
  const phoneMenuShowing = store((state) => state.phoneMenuShowing);

  const handleClickPhone = () => {
    if (!phoneQuestActive) return;
    if (phoneMenuShowing) return;
    console.log("FFF");
    store.setState({ phoneMenuShowing: true });
  };

   return(<>
   <group
      ref={phone}
    position={[4.5, -0.02, 0.7]}
    rotation={[-Math.PI/2, 0, 0]}
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
    <PhoneModel />
    </group>
   </>)
}