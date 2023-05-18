import { createSlice } from "@reduxjs/toolkit";
import { CarListingsType } from '../../types/ApiTypes'
import { PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    data: CarListingsType,
    quantity: number,
}

export type CartType = {
    value: CartItem[]
}


/* EXAMPLE:
CartState: {
    value: [
        {
            data: {}
            quantity: 0
        },
        {
            data: {}
            quantity: 0
        },
    ]
} */


export const CartState = createSlice({
    name: 'CartState',
    initialState: { value: [] } as CartType,
    reducers: {
        addToCart: (state: CartType, action: PayloadAction<CarListingsType>) => {
            if (!state.value.some((cartItem) => cartItem.data.id === action.payload.id)) { // doesn't exist in cart
                state.value = [...state.value, { // add
                    data: action.payload,
                    quantity: 1
                }];
            }
        },
        removeFromCart: (state: CartType, action: PayloadAction<number>) => { // takes in id
            state.value = state.value.filter((el) => el.data.id !== action.payload);
        },
        incrementQuantity: (state: CartType, action: PayloadAction<number>) => {
            state.value = state.value.map((cartItem) => {
                if (cartItem.data.id === action.payload) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }
                else return cartItem
            })
        },
        decrementQuantity: (state: CartType, action: PayloadAction<number>) => {
            state.value = state.value.map((cartItem) => {
                if (cartItem.data.id === action.payload) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity
                    }
                }
                else return cartItem
            })
        },
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = CartState.actions;