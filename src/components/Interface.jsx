import React from "react";
import store from "../stores/store";

export default function Interface() {
  const personHelped = store((state) => state.personHelped);
  const totalPersonToHelp = store((state) => state.totalPersonToHelp);
  const currentQuest = store((state) => state.currentQuest);

  return (
    <>
      <div className="person-interface">
        <div className="person-helped">
          <p>
            Personnes aidées : {personHelped} / {totalPersonToHelp}
          </p>
        </div>
      </div>

      <div className="quest-interface">
        <div className="quest-active">
          <p>Quête en cours : {currentQuest}</p>
        </div>
      </div>
    </>
  );
}
