import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {
        topics: {
            '123': {
                id: '123',
                name: 'example topic',
                icon: 'icon url',
                quizIds: ['456'],
            },
        }
    }
};

const topicsSlice = createSlice({
    name: 'topic',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics.topics[action.payload.id] = action.payload;
        }
    }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics.topics;
export default topicsSlice;
