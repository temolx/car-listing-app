import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type filters = {
    brand: string,
    model: string,
    price: {
        min: number | null,
        max: number | null
    }
}

export type currentFilters = {
    value: filters
}

const initialFilters = {
    value: {
        brand: '',
        model: '',
        price: {
            min: null,
            max: null
        }
    }
}

export const Filters = createSlice({
    name: 'Filters',
    initialState: initialFilters as currentFilters,
    reducers: {
        setFilters: (state: currentFilters, action: PayloadAction<filters>) => {
            state.value = action.payload;
        },
        clearFilters: (state: currentFilters) => {
            state = initialFilters;
        }
    }
})

export const { setFilters, clearFilters } = Filters.actions;