import React from "react";
import store from "../stores/store";
import { Center, Text, Text3D, useMatcapTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

const material = new THREE.MeshMatcapMaterial();

export default function Interface() {
  const personHelped = store((state) => state.personHelped);
  const totalPersonToHelp = store((state) => state.totalPersonToHelp);
  const currentQuest = store((state) => state.currentQuest);

  const [matcapTexture] = useMatcapTexture("7D7673_353230_AEA7B0_4C4444", 256);

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <>
      <group position={[0, 1.5, 0]}>
        <Center>
          <Text scale={0.08} height={0.2}>
            Quete en cours : {currentQuest}
          </Text>
        </Center>
      </group>

      <group position={[0, 1, 0]}>
        <Center>
          <Text scale={0.08} height={0.2}>
            Personnes aidees : {personHelped} / {totalPersonToHelp}
          </Text>
        </Center>
      </group>
    </>
  );
}
