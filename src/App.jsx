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
  useXR,
} from "@react-three/xr";
import { useRef } from "react";

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <color attach="background" args={["#f7dcad"]} />
          <Experience />
        </XR>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
