/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\\public\\Business_Man.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export function BusinessMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Business_Man.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions["CharacterArmature|Idle_Neutral"].reset().fadeIn(0.5).play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh
            name="Suit_Legs"
            geometry={nodes.Suit_Legs.geometry}
            material={materials.Suit}
            skeleton={nodes.Suit_Legs.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <skinnedMesh
            name="Suit_Feet"
            geometry={nodes.Suit_Feet.geometry}
            material={materials.Black}
            skeleton={nodes.Suit_Feet.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group
            name="Suit_Body"
            position={[0, 0.007, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="Suit_Body_1"
              geometry={nodes.Suit_Body_1.geometry}
              material={materials.Suit}
              skeleton={nodes.Suit_Body_1.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_2"
              geometry={nodes.Suit_Body_2.geometry}
              material={materials.White}
              skeleton={nodes.Suit_Body_2.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_3"
              geometry={nodes.Suit_Body_3.geometry}
              material={materials.Tie}
              skeleton={nodes.Suit_Body_3.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_4"
              geometry={nodes.Suit_Body_4.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Body_4.skeleton}
            />
          </group>
          <group name="Suit_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Suit_Head_1"
              geometry={nodes.Suit_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Head_1.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_2"
              geometry={nodes.Suit_Head_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Suit_Head_2.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_3"
              geometry={nodes.Suit_Head_3.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Suit_Head_3.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_4"
              geometry={nodes.Suit_Head_4.geometry}
              material={materials.Eye}
              skeleton={nodes.Suit_Head_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Business_Man.glb");
