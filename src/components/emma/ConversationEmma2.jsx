import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationEmma2() {
  const emmaText2Showing = store((state) => state.emmaText2Showing);
  const emmaQuest2Active = store((state) => state.emmaQuest2Active);
  const emmaQuest2Done = store((state) => state.emmaQuest2Done);

  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Moi",
      message: "Voici ton téléphone Emma. Je l'ai trouvé à l'accueil.",
    },
    {
      speaker: "Emma",
      message:
        "Super tu as retrouvé mon téléphone merci beaucoup. Mais je ne sais pas à qui parler de ces messages.",
      options: [
        {
          text: "Tu devrais en parler à Sylvie, ton amie de bureau.",
          correct: false,
        },
        {
          text: "Tu devrais les signaler au service des ressources humaines ou à un supérieur hiérarchique.",
          correct: true,
        },
        {
          text: "Tu devrais en parler à Gérard Depardieu, un grand défenseur des droits des femmes.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Emma",
      message:
        "Tu as raison, je vais en parler à mon supérieur hiérarchique, merci pour ton aide",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "Emma") {
      return "emma.png";
    } else {
      return "moi.png";
    }
  };

  const handleResponse = (responseIndex) => {
    if (step < steps.length) {
      const currentStep = steps[step];
      if (currentStep.options && currentStep.options[responseIndex].correct) {
        // L'utilisateur a choisi la réponse correcte
        setStep(step + 1);
      } else {
        // L'utilisateur a choisi une réponse incorrecte
        setStep(0);
      }
    }
  };

  const closeConversation = () => {
    store.setState({ currentQuest: "Fin du jeu" });
    store.setState({ personHelped: 1 });
    store.setState({ emmaText2Showing: false });
    store.setState({ emmaQuest2Active: false });
    store.setState({ emmaQuest2Done: true });
  };

  return (
    <>
      {emmaText2Showing && (
        <div className="conversation">
          <img
            src={getImage(steps[step].speaker)}
            alt={steps[step].speaker}
            className="employe-image"
          />
          <div className="nomPersonne">
            <p>{steps[step].speaker}</p>
          </div>
          <div className="message">
            <p>{steps[step].message}</p>
          </div>
          <div className="boutons">
            {step < steps.length && (
              <div className="reponse-buttons">
                {steps[step].options ? (
                  steps[step].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleResponse(index)}
                      className="reponse-button"
                    >
                      {option.text}
                    </button>
                  ))
                ) : (
                  <>
                    {!(step === steps.length - 1) && (
                      <button onClick={next} className="reponse-button">
                        Suivant
                      </button>
                    )}
                    {step === steps.length - 1 && (
                      <button
                        onClick={closeConversation}
                        className="reponse-button"
                      >
                        Fermer
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
