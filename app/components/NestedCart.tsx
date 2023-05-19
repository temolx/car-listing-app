import { MenuList, MenuItem, ListItemText, Card, Box } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { CarListingsType } from "../types/ApiTypes"

interface IProps {
    selection: string
}

function NestedCart({ selection }: IProps) {

    const Cars = useSelector((state: RootState) => state.Cars);

  return (
    <Card sx={{ position: 'absolute', right: 160, top: selection === 'brand' ? 0 : 45, minWidth: '150px', zIndex: 99 }}>
        <MenuList>
        { Cars.value && Cars.value.filter((car: CarListingsType, index: number) => {
            const ogIndex = Cars.value.findIndex((el) => el[selection] === car[selection]);
            return index === ogIndex;
        }).map((car: CarListingsType) => (
            <MenuItem key={ car.id }>
                <ListItemText>{ car[selection] }</ListItemText>
            </MenuItem>
        )) }
        </MenuList>
     </Card>
  )
}

export default NestedCart