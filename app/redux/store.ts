import { configureStore } from "@reduxjs/toolkit";
import { CartVisibility } from "./slices/CartVisibility";
import { CartState } from "./slices/CartState";
import { Cars } from "./slices/Cars";
import { Filters } from "./slices/Filters";

export const store = configureStore({
    reducer: {
        CartVisibility: CartVisibility.reducer,
        CartState: CartState.reducer,
        Cars: Cars.reducer,
        Filters: Filters.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>