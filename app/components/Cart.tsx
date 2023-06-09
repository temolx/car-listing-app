'use client'

import { Box, Drawer, List, ListItem, Card, Typography, ThemeProvider, CssBaseline, IconButton, Button, Divider } from "@mui/material"
import { theme } from "../mui/customTheme";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleCartVisibility } from "../redux/slices/CartVisibility";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/slices/CartState";
import { CartItem } from "../redux/slices/CartState";

function Cart() {

    const dispatch = useDispatch();

    const CartVisibility = useSelector((state: RootState) => state.CartVisibility);
    const cartItems = useSelector((state: RootState) => state.CartState);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />

    { cartItems.value.length > 0 ? <Box>
        <Drawer
        anchor="right"
        open={CartVisibility.value}
        onClose={() => dispatch(toggleCartVisibility())}
        >
            <List>
                { cartItems.value && cartItems.value.map((cartItem: CartItem) => (
                <ListItem key={ cartItem.data.id }>
                    <Card>
                    <Box p={2} sx={{ position: 'relative' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex'}}>
                                <IconButton color="primary" onClick={() => dispatch(incrementQuantity(cartItem.data.id))} ><AddIcon /></IconButton>
                                <IconButton color="primary" onClick={() => dispatch(decrementQuantity(cartItem.data.id))} ><RemoveIcon /></IconButton>
                            </Box>

                            <IconButton color="primary" onClick={() => dispatch(removeFromCart(cartItem.data.id))}><DeleteIcon /></IconButton>
                         </Box>

                        <Image src={ cartItem.data.image.front } alt="tesla car front view" style={{ width: '300px', height: '170px', objectFit: 'contain' }} />

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography variant="h5" color="primary">{ cartItem.data.brand }</Typography>
                                <Typography variant="h5" color="primary">{ cartItem.data.model }</Typography>
                                <Typography variant="h6" color="primary">${ cartItem.data.price * cartItem.quantity }</Typography>
                            </Box>

                            <Box>
                                <Typography variant="h2" color="primary">X{ cartItem.quantity }</Typography>
                            </Box>
                        </Box>
                    </Box>
                    </Card>
                </ListItem> ))}
            </List>
            
            <Box p={2}>
                <Divider sx={{ mb: 1 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" color="primary">Total:</Typography>
                    <Typography variant="h5" color="primary">${ cartItems.value.reduce((a, b) => a + b.data.price * b.quantity, 0) }</Typography>
                </Box>

                <Button variant="contained" size="medium" fullWidth sx={{ mt: '10px' }}>Agree and continue</Button>
            </Box>
        </Drawer>
    </Box> : null }
    </ThemeProvider>
  )
}

export default Cart