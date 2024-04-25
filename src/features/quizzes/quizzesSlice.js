import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    quizzes: {
        quizzes: {
            '456': {
                id: '456',
                topicId: '123',
                name: 'example quiz',
                cardIds: ['789', '101', '102'],
            },
        }
    }
};

const quizzesSlice = createSlice({
    name: 'quiz',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes.quizzes[action.payload.id] = action.payload;
        },
        addQuizId: (state, action) => {
            state.topics.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
});

export const { addQuiz, addQuizId } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes.quizzes;
export default quizzesSlice;
