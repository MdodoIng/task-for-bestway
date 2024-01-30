import { cardSate, Columns, Card as cardItem } from "../type";

export const moveCardToColumn = ({
  cards,
  cardId,
  column,
  index,
}: {
  cards: cardSate;
  cardId: string;
  column: Columns;
  index: number;
}) => {
  const card = Object.entries(cards)
    .map(([column, cards]) => {
      const card = cards.find((card) => card.id === cardId);

      if (!card) {
        return null;
      }
      return { previousColumn: column as unknown as Columns, card };
    })
    .filter(Boolean)[0];

  console.log(card);

  if (!card) return;
  const newCards = {
    ...cards,
    [card.previousColumn]: cards[card.previousColumn].filter(
      (card) => card.id !== cardId
    ),
    [column]: [
      ...cards[column].slice(0, index),
      card.card,
      ...cards[column].slice(index),
    ].filter((obj, idx) => {
      return (
        idx ===
        [
          ...cards[column].slice(0, index),
          card.card,
          ...cards[column].slice(index),
        ].findIndex((o) => obj.id === o.id)
      );
    }),
  };

  return newCards;
};
