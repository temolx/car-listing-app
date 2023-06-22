import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ContactStatusType = {
    value: string
}

export const ContactStatus = createSlice({
    name: 'ContactStatus',
    initialState: { value: 'topSection' } as ContactStatusType,
    reducers: {
        setStatus: (state: ContactStatusType, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { setStatus } = ContactStatus.actions