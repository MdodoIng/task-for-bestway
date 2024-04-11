import React from "react";
import type { Card as CardType } from "../type";
import { useCartStore } from "../utils/store";

type CardProps = CardType;

const Card = ({ title, id }: CardProps) => {
  const setDraggingCard = useCartStore((store) => store.setDraggingCard);

  return (
    <div
      draggable="true"
      onDragStart={(ev) => {
        setDraggingCard(id);
        ev.dataTransfer.setData("text/html", ev.currentTarget.outerHTML);
      }}
      onDragEnd={() => setDraggingCard(null)}
      style={{ viewTransitionName: `card-${id}` }}
      className="cursor-grab rounded-md bg-gray-900 p-3 shadow-md active:animate-pulse active:cursor-grabbing "
    >
      <p>{title}</p>
    </div>
  );
};

export default Card;
