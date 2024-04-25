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
        },
        addQuizId: (state, action) => {
            state.topics.topics[action.payload.topicId].quizIds.push(action.payload.id);
        },
    }
});

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics.topics;
export default topicsSlice;
