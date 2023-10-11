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

function App() {
  return (
    <>
      <VRButton />
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 30 }}>
        <XR>
          <color attach="background" args={["#f7dcad"]} />
          <TeleportationPlane rightHand={true} leftHand={true} visible={true} />
          <Experience />
          <Controllers />
          <Hands />
        </XR>
      </Canvas>
      <Loader />
      <PhoneInterface />
      <ConversationJohn />
      <ConversationEmma />
      <ConversationEmma2 />
    </>
  );
}

export default App;
