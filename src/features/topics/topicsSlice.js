import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topic',
    initialState: {
        icon: '',
        name: '',
    },
    reducers: {
        createTopic: (state, action) => {
        const {icon, name} = action.payload;

        }
    }
});
