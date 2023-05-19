import { MenuList, MenuItem, ListItemText, Card, Box } from "@mui/material"
import NestedCart from "./NestedCart"

function FilterDrop() {

  return (
    <Box sx={{ position: 'absolute', right: 0, top: 40, minWidth: '150px' }}>
        <Box sx={{ position: 'relative' }}>
        <Card>
            <MenuList>
                <MenuItem>
                    <ListItemText>Brand</ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText>Model</ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText>Price</ListItemText>
                </MenuItem>
            </MenuList>
        </Card>

        {/* <NestedCart selection={'brand'} /> */}
        <NestedCart selection={'model'} />
        </Box>
    </Box>
  )
}

export default FilterDrop