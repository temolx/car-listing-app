'use client'

import { useState } from "react"
import { Card, TextField, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setFilters } from "../redux/slices/Filters"
import { RootState } from "../redux/store";

function PriceFilter() {

    const dispatch = useDispatch();
    const Filters = useSelector((state: RootState) => state.Filters);

    const[minValue, setMinValue] = useState<number>(0);
    const[maxValue, setMaxValue] = useState<number>(0);


    const ApplyFilters = () => {
        dispatch(setFilters({
            ...Filters.value,
            price: {
                min: minValue,
                max: maxValue
            }
        }))
    }

  return (
    <Card sx={{ position: 'absolute', right: 150, top: 80, minWidth: '150px', zIndex: 99, p: 2 }}>
            <TextField label="Min" variant="outlined" onChange={(e) => setMinValue(Number(e.target.value))} defaultValue={Filters.value.price.min} sx={{ mb: 2 }} />
            <TextField label="Max" variant="outlined" onChange={(e) => setMaxValue(Number(e.target.value))} defaultValue={Filters.value.price.max} />

            <Button onClick={() => ApplyFilters()} variant="contained" size="small" color="primary" sx={{ mt: 1, width: '100%' }}>Apply</Button>
     </Card>
  )
}

export default PriceFilter