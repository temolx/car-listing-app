import { configureStore } from "@reduxjs/toolkit";
import { CartVisibility } from "./slices/CartVisibility";
import { CartState } from "./slices/CartState";
import { Cars } from "./slices/Cars";
import { Filters } from "./slices/Filters";
import { ContactStatus } from "./slices/ContactStatus";

export const store = configureStore({
    reducer: {
        CartVisibility: CartVisibility.reducer,
        CartState: CartState.reducer,
        Cars: Cars.reducer,
        Filters: Filters.reducer,
        ContactStatus: ContactStatus.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>