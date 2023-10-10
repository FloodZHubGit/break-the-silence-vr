import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      currentQuest: "Parler à John",
      personHelped: 0,
      totalPersonToHelp: 5,
      johnQuestActive: true,
      johnTextShowing: false,
      emmaQuestActive: false,
      emmaTextShowing: false,
    };
  })
);
