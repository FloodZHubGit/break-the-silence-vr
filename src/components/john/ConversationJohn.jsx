import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationJohn() {
  const johnTextShowing = store((state) => state.johnTextShowing);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  const closeConversation = () => {
    store.setState({ johnTextShowing: false });
    store.setState({ johnQuestActive: false });
  };

  return (
    <>
      {johnTextShowing && (
        <div className="conversation">
          <img src="john.png" alt="John" className="employe-image" />
          <div className="nomPersonne">
            <p>John</p>
          </div>
          <div className="message">
            {accepted ? (
              <>
                <p>
                  Merci d'avoir accepté de nous aider dans la lutte contre le
                  harcèlement sexuel !
                </p>

                <div className="boutons">
                  <button onClick={closeConversation}>Fermer</button>
                </div>
              </>
            ) : (
              <p>
                Salut, je suis John, le boss de cette boîte. Je suis contre le
                harcèlement sexuel, et je voudrais que tu m'aides à le
                combattre. Je vais te donner des situations, et tu devras
                choisir la bonne réponse. Si tu fais une erreur, je te dirai
                pourquoi c'est une erreur, et tu pourras recommencer. Si tu ne
                fais pas d'erreur, tu pourras passer à la situation suivante.
                Bonne chance !
              </p>
            )}
          </div>
          <div className="boutons">
            {!accepted && (
              <>
                <button onClick={handleAccept}>Accepter</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
