'use client'

import { MenuList, MenuItem, ListItemText, Card, Box } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { CarListingsType } from "../types/ApiTypes"

import { setFilters } from "../redux/slices/Filters"

interface IProps {
    selection: string
}

function NestedCart({ selection }: IProps) {

    const dispatch = useDispatch();
    const Cars = useSelector((state: RootState) => state.Cars);
    const Filters = useSelector((state: RootState) => state.Filters);

    const handleFilters = (targetFilter: string) => {
        dispatch(setFilters({
            ...Filters.value,
            [selection]: targetFilter
        }))
    }

  return (
    <Card sx={{ position: 'absolute', right: 150, top: selection === 'brand' ? 0 : 45, minWidth: '150px', zIndex: 99 }}>
        <MenuList>
        { Cars.value && Cars.value.filter((car: CarListingsType, index: number) => {
            const ogIndex = Cars.value.findIndex((el) => el[selection] === car[selection]);
            return index === ogIndex;
        }).map((car: CarListingsType) => (
            <MenuItem key={ car.id } onClick={() => handleFilters(car[selection])}>
                <ListItemText>{ car[selection] }</ListItemText>
            </MenuItem>
        )) }
        </MenuList>
     </Card>
  )
}

export default NestedCart