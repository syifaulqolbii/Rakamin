import {
    createSlice,
} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    name: "Rakamin",
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        customIncrement(state, action) {
            state.count += action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    customIncrement
} = counterSlice.actions;

export default counterSlice.reducer;