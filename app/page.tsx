"use client";

import { Columns } from "../type";
import React, { useState } from "react";
import { initialTask } from "../utils/data";
import Column from "../components/Column";
import { useCartStore } from "../utils/store";
import { moveCardToColumn } from "../utils/moveCardToColumn";
import { flushSync } from "react-dom";
import AddTask from "../components/addTask";

const columTitles: { [key in Columns]: string } = {
  [Columns.IN_PROGRESS]: "⏳ In Progress",
  [Columns.DONE]: "✅ Done",
};

const columns = Object.entries(columTitles) as unknown as [Columns, string[]];
export default function Home() {
  const [cards, setCards] = useState(initialTask);
  const draggingCard = useCartStore((state) => state.draggingCard);

  const onDrop = (column: Columns, index: number) => {
    if (!draggingCard) return;

    const newCards = moveCardToColumn({
      cards,
      cardId: draggingCard,
      column,
      index,
    });

    // @ts-ignore
    if (document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition(() => {
        flushSync(() => {
          setCards(newCards);
        });
      });
    } else {
      setCards(newCards);
    }
  };
  return (
    <main className="bg-gray-900 h-screen flex items-center justify-center py-[10vh]">
      <div className="grid grid-cols-3 max-w-[900px] gap-4 h-full">
        <AddTask cards={cards} setCards={setCards} />
        {/* @ts-ignore */}
        {columns.map(([columnId, columTitle]) => (
          <Column
            key={columnId}
            title={columTitle}
            id={columnId}
            cards={cards[columnId]}
            onDrop={onDrop}
          />
        ))}
      </div>
    </main>
  );
}
