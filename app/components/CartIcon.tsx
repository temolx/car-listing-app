'use client'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ThemeProvider, Fab } from '@mui/material';
import { theme } from '../mui/customTheme';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleCartVisibility } from '../redux/slices/CartVisibility';

function CartIcon() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.CartState);

  return (
    <ThemeProvider theme={theme}>
        <Fab color="primary" aria-label="show" size="large" sx={{ 
          position: 'fixed',
          bottom: '25px',
          right: '40px',
          boxShadow: 'none'
         }}
         disabled={cartItems.value.length <= 0}
         onClick={() => dispatch(toggleCartVisibility())}
         >
          <ShoppingCartOutlinedIcon color="secondary" />
        </Fab>
    </ThemeProvider>
  )
}

export default CartIcon