import { MenuList, MenuItem, ListItemText, Card, Box } from "@mui/material"
import NestedCart from "./NestedCart"
import PriceFilter from "./PriceFilter"

interface IProps {
    currentHover: string,
    setCurrentHover: any
}

const FilterDrop = ({ currentHover, setCurrentHover } : IProps) => {

  return (
    <Box sx={{ position: 'absolute', right: 0, top: 40, minWidth: '150px' }}>
        <Box sx={{ position: 'relative' }} onMouseLeave={() => setCurrentHover('')}>
        <Card>
            <MenuList>
                <MenuItem onMouseEnter={() => setCurrentHover('brand')}>
                    <ListItemText>Brand</ListItemText>
                </MenuItem>

                <MenuItem onMouseEnter={() => setCurrentHover('model')}>
                    <ListItemText>Model</ListItemText>
                </MenuItem>

                <MenuItem onMouseEnter={() => setCurrentHover('price')}>
                    <ListItemText>Price</ListItemText>
                </MenuItem>
            </MenuList>
        </Card>

        { currentHover === 'brand' ? <NestedCart selection={'brand'} /> : (currentHover === 'model' ? <NestedCart selection={'model'} /> : (currentHover === 'price' ? <PriceFilter /> : null)) }
        </Box>
    </Box>
  )
}

export default FilterDrop