import { configureStore } from '@reduxjs/toolkit';
import clickReducer from '@entities/Click/model/clickSlice';

export const store = configureStore({
    reducer: {
        click: clickReducer,
    },
});

// Типизация RootState и Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
