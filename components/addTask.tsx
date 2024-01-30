import React, { useState } from "react";
import { Card, cardSate } from "../type";

type AddTaskProps = {
  setCards: React.Dispatch<React.SetStateAction<cardSate>>;
  cards: cardSate;
};

const AddTask = ({ cards, setCards }: AddTaskProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      const newCards: any = {
        ...cards,
        [0]: [
          ...cards[0],
          { id: Math.random().toString(16).slice(2), title: value },
        ],
      };
      setCards(newCards);
      setValue("")
    }
  };
  return (
    <div className="rounded-lg bg-gray-700 p-3 h-full">
      <h2 className="mb-3 text-xl">➕ Add Task</h2>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add your Task"
            className="bg-gray-900 text-white text-base placeholder:text-white/75 outline-none px-4 py-3 rounded-md "
          />
          <button
            type="submit"
            className="px-10 py-2 bg-gray-900 rounded-md w-max"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
