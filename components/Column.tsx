import { Columns, Card as cardType } from "../type";
import React from "react";
import DropArea from "./DropArea";
import Card from "./Card";

type ColumnProps = {
  title: string;
  id: Columns;
  cards: cardType[];
  onDrop: (column: Columns, index: number) => void;
};

const Column = ({ title, id, cards, onDrop }: ColumnProps) => {
  return (
    <div className="rounded-lg bg-gray-700 p-3 h-full">
      <h2 className="mb-3 text-xl">{title}</h2>
      <div className="flex flex-col h-full">
        <DropArea onDrop={() => onDrop(id, 0)} />
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <Card {...card} />
            <DropArea onDrop={() => onDrop(id, index + 1)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Column;
