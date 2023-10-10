import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader } from "@react-three/drei";
import ConversationJohn from "./components/john/ConversationJohn";
import ConversationEmma from "./components/emma/ConversationEmma";
import Interface from "./components/Interface";
import PhoneInterface from "./components/phone/Phoneinterface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 30 }}>
        <color attach="background" args={["#f7dcad"]} />
        <Experience />
      </Canvas>
      <Loader />
      <Interface />
      <PhoneInterface />
      <ConversationJohn />
      <ConversationEmma />
    </>
  );
}

export default App;
