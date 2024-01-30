import { create } from "zustand";

type CardStore = {
  draggingCard: string | null;
  setDraggingCard: (cardId: string | null) => void;
};

export const useCartStore = create<CardStore>((set) => ({
  draggingCard: null,
  setDraggingCard: (cardId: string | null) => set({ draggingCard: cardId }),
}));
