import { createSlice } from '@reduxjs/toolkit';

interface ClickState {
    value: number;
}

const initialState: ClickState = {
    value: 0,
};

export const clickSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
});

export const { increment } = clickSlice.actions;
export default clickSlice.reducer;
