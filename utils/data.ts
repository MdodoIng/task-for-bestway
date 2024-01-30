import { Columns, cardSate } from "../type";

export const initialTask: cardSate = {
  [Columns.IN_PROGRESS]: [
    {
      id: "FYI-567",
      title: "Make a video about view transitions",
    },
    {
      id: "FYI-09",
      title: "Take a break",
    },
  ],
  [Columns.DONE]: [
    {
      id: "FYI-230",
      title: "Tweet about blog form content for fe.fyi",
    },
  ],
};
