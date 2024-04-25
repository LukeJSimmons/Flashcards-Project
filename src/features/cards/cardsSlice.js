import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {
        cards: {
            '789': {
                id: '789',
                front: 'front text',
                back: 'back text',
            },
        }
    }
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.cards[action.payload.id] = action.payload;
        }
    }
});

export const { addCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards.cards;
export default cardsSlice;
