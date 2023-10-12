import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";
import { Center, Text, Text3D } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import * as THREE from "three";
import { useEffect } from "react";

export default function ConversationJohn() {
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
            <Center position={[1, 1, 4.5]} rotation={[0, Math.PI, 0]}>
              <Text scale={0.08} height={0.2}>
                Fermer
              </Text>
            </Center>
          </Interactive>
        </>
      ) : (
        <Center position={[1.5, 2, 4.5]} rotation={[0, Math.PI, 0]}>
          <Text scale={0.08} height={0.2}>
            Salut, je suis John, le supérieur de cet étage. Aide les personnes
            qui ont besoin d'aide.
          </Text>
        </Center>
      )}
      {!accepted && (
        <>
          <Interactive onSelect={handleAccept}>
            <Center position={[1, 1, 4.5]} rotation={[0, Math.PI, 0]}>
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
