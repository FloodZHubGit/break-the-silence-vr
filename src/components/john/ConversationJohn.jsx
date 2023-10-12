import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";
import { Center, Text, Text3D } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import * as THREE from "three";
import { useEffect } from "react";

const material = new THREE.MeshMatcapMaterial();

export default function ConversationJohn() {
  const johnTextShowing = store((state) => state.johnTextShowing);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  const closeConversation = () => {
    store.setState({ johnTextShowing: false });
    store.setState({ johnQuestActive: false });
    store.setState({ johnQuestDone: true });
    store.setState({ emmaQuestActive: true });
    store.setState({ currentQuest: "Parler à Emma" });

    const personHelped = store((state) => state.personHelped);
    const totalPersonToHelp = store((state) => state.totalPersonToHelp);
    const currentQuest = store((state) => state.currentQuest);

    const [matcapTexture] = useMatcapTexture(
      "7B5254_E9DCC7_B19986_C8AC91",
      256
    );

    useEffect(() => {
      matcapTexture.colorSpace = THREE.SRGBColorSpace;
      matcapTexture.needsUpdate = true;

      material.matcap = matcapTexture;
      material.needsUpdate = true;
    }, []);
  };

  return (
    <>
      {accepted ? (
        <>
          <Center position={[1, 2, 4.5]} rotation={[0, Math.PI, 0]}>
            <Text scale={0.08} height={0.2}>
              Merci d'avoir accepté de nous aider dans la lutte contre le
              harcèlement sexuel !
            </Text>
          </Center>

          <Interactive onSelect={closeConversation}>
            <Center position={[1, 2, 4.5]} rotation={[0, Math.PI, 0]}>
              <Text scale={0.08} height={0.2}>
                Fermer
              </Text>
            </Center>
          </Interactive>
        </>
      ) : (
        <Center position={[1, 2, 4.5]} rotation={[0, Math.PI, 0]}>
          <Text scale={0.08} height={0.2}>
            Salut, je suis John, le supérieur de cet étage. Aide les personnes
            qui ont besoin d'aide.
          </Text>
        </Center>
      )}
      {!accepted && (
        <>
          <Interactive onSelect={handleAccept}>
            <Center position={[1, 2, 4.5]} rotation={[0, Math.PI, 0]}>
              <Text scale={0.08} height={0.2}>
                Accepter
              </Text>
            </Center>
          </Interactive>
        </>
      )}
    </>
  );
}
