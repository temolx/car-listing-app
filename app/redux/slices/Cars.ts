import { createSlice } from "@reduxjs/toolkit";
import { CarListingsType } from "@/app/types/ApiTypes";

import { PayloadAction } from "@reduxjs/toolkit";

export type CarsState = {
    value: CarListingsType[]
}

export const Cars = createSlice({
    name: 'Cars',
    initialState: { value: [] } as CarsState,
    reducers: {
        setCars: (state: CarsState, action: PayloadAction<CarListingsType[]>) => {
            state.value = action.payload;
        }
    }
})

export const { setCars } = Cars.actions