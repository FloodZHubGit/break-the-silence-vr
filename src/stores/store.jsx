import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      currentQuest: "Parler à John",

      personHelped: 0,
      totalPersonToHelp: 5,

      johnQuestActive: true,
      johnQuestDone: false,
      johnTextShowing: false,

      emmaQuestActive: false,
      emmaTextShowing: false,
      emmaQuestDone: false,

      phoneQuestActive: false,
      phoneMenuShowing: false,
      phoneQuestDone: false,

      emmaQuest2Active: false,
      emmaText2Showing: false,
      emmaQuest2Done: false,
    };
  })
);
