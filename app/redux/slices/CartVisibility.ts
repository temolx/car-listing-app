import { createSlice } from "@reduxjs/toolkit";

type visibilityType = {
    value: boolean
}

export const CartVisibility = createSlice({
    name: 'CartVisibility',
    initialState: { value: false } as visibilityType,
    reducers: {
        toggleCartVisibility: (state: visibilityType) => {
            state.value = !state.value;
        }
    }
})

export const { toggleCartVisibility } = CartVisibility.actions;