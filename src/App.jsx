import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Stage } from "@react-three/drei";
import ConversationJohn from "./components/john/ConversationJohn";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#f7dcad"]} />
        <Experience />
      </Canvas>
      <ConversationJohn />
    </>
  );
}

export default App;
