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
    store.setState({ johnQuestDone: true });
    store.setState({ emmaQuestActive: true });
    store.setState({ currentQuest: "Parler à Emma" });
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
                combattre. Avec l'aide de ton équipier, tu vas devoir aider les
                employés de la boîte qui font face à des situations de
                harcèlement sexuel. Tu vas devoir les aider à trouver les
                solutions les plus adaptées à leur situation. Si tu as faux, tu
                devras recommencer. Tu es prêt ?
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
