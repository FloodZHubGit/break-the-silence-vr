import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader } from "@react-three/drei";
import ConversationJohn from "./components/john/ConversationJohn";
import ConversationEmma from "./components/emma/ConversationEmma";
import Interface from "./components/Interface";
import ConversationEmma2 from "./components/emma/ConversationEmma2";
import PhoneInterface from "./components/phone/PhoneInterface";
import {
  VRButton,
  ARButton,
  XR,
  Controllers,
  Hands,
  TeleportationPlane,
} from "@react-three/xr";
import { useRef } from "react";

function App() {
  return (
    <>
      <VRButton />
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 30 }}>
        <XR>
          <color attach="background" args={["#f7dcad"]} />
          <Experience />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeBufferGeometry args={[10, 10]} />
            <meshStandardMaterial color="white" />
            <TeleportationPlane rightHand={true} leftHand={true} />
          </mesh>
          <Controllers />
          <Hands />
        </XR>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
