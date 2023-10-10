import React from "react";
import store from "../../stores/store";

export default function PhoneInterface() {
  const phoneMenuShowing = store((state) => state.phoneMenuShowing);
  const phoneQuestActive = store((state) => state.phoneQuestActive);

  const handleClickClose = () => {
    if (!phoneQuestActive) return;
    if (!phoneMenuShowing) return;
    store.setState({ phoneMenuShowing: false });
    store.setState({ phoneQuestActive: false });
    store.setState({ phoneQuestDone: true });
    store.setState({ currentQuest: "Rendre le téléphone à Emma" });
    store.setState({ emmaQuest2Active: true });
  };

  return (
    <>
      {phoneMenuShowing && (
        <div>
          <div className="phone-interface">
            <img src="./screen_conv_emma_gabriel.png" alt="" />
          </div>
          <div className="close-phone" onClick={handleClickClose}>
            X
          </div>
        </div>
      )}
    </>
  );
}
