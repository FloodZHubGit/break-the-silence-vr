import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader } from "@react-three/drei";
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
