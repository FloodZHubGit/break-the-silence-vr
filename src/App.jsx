// import { Canvas } from "@react-three/fiber";
// import { Experience } from "./components/Experience";
// import { Loader } from "@react-three/drei";
// import ConversationJohn from "./components/john/ConversationJohn";
// import ConversationEmma from "./components/emma/ConversationEmma";
// import Interface from "./components/Interface";
// import ConversationEmma2 from "./components/emma/ConversationEmma2";
// import PhoneInterface from "./components/phone/PhoneInterface";
// import {
//   VRButton,
//   ARButton,
//   XR,
//   Controllers,
//   Hands,
//   TeleportationPlane,
//   useXR,
// } from "@react-three/xr";
// import { useRef } from "react";

// function App() {
//   return (
//     <>
//       <VRButton />
//       <Canvas>
//         <XR>
//           <color attach="background" args={["#f7dcad"]} />
//           <Experience />
//         </XR>
//       </Canvas>
//       <Loader />
//     </>
//   );
// }

import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  XR,
  Controllers,
  VRButton,
  TeleportationPlane,
  useTeleportation,
  useXR,
} from "@react-three/xr";
import { Plane, Sky } from "@react-three/drei";
import { Vector3 } from "three";
import "@react-three/fiber";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Scene() {
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
}

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Scene />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
