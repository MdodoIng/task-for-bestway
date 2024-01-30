import { Columns, cardSate } from "../type";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({

  wordsPerSentence: {
    max: 2,
    min: 1
  }
});

export const initialTask: cardSate = {
  [Columns.IN_PROGRESS]: [
    {
      id: Math.random().toString(16).slice(2),
      title: lorem.generateSentences(5),
    },
    {
      id: Math.random().toString(16).slice(2),
      title: lorem.generateSentences(5),
    },
  ],
  [Columns.DONE]: [
    {
      id: Math.random().toString(16).slice(2),
      title: lorem.generateSentences(5),
    },
  ],
};
