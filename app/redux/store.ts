import { configureStore } from "@reduxjs/toolkit";
import { CartVisibility } from "./slices/CartVisibility";
import { CartState } from "./slices/CartState";

export const store = configureStore({
    reducer: {
        CartVisibility: CartVisibility.reducer,
        CartState: CartState.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>