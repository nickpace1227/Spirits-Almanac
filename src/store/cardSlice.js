import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "inventory",
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => {return card.id !== action.payload.id})
    }
  },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
