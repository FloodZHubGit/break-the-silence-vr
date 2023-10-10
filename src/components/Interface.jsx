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

  const [matcapTexture] = useMatcapTexture("E6BF3C_5A4719_977726_FCFC82", 256);

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <>
      <Center>
        <Text3D
          // material={material}
          font="./helvetiker_regular.typeface.json"
          size={0.1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[0, 3, 0]}
        >
          Quete en cours : {currentQuest}
        </Text3D>

        <Text3D
          // material={material}
          font="./helvetiker_regular.typeface.json"
          size={0.1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[0, 2.5, 0]}
        >
          Personnes aidees : {personHelped} / {totalPersonToHelp}
        </Text3D>
      </Center>
      {/* <Text3D position={[0, 4, 0]} color="black" fontSize={0.5}>
        {currentQuest}
      </Text3D>

      <Text3D position={[0, 2, 0]} color="black" fontSize={0.5}>
        Personnes aidées : {personHelped} / {totalPersonToHelp}
      </Text3D> */}
    </>
  );
}
