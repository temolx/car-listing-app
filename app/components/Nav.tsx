'use client'

import AppBar from '@mui/material/AppBar';
import { Box, List, ListItemButton, CssBaseline, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import { theme } from '../mui/customTheme';
import { useDispatch } from 'react-redux';
import { setStatus } from '../redux/slices/ContactStatus';

function Nav() {

    const dispatch = useDispatch();
    const navItems = ['shop', 'create', 'post', 'contact']

    const setContact = (navItem: string) => {
        if (navItem === 'contact') dispatch(setStatus('contactSection'));
        else dispatch(setStatus('topSection'));
    }

  return (
    <ThemeProvider theme={theme} >
    <CssBaseline />

    <Box>
        <AppBar >
            <List sx={{ display: 'flex' }}>
                { navItems.map((navItem) => (
                    <ListItemButton key={navItem} sx={{display:'flex', justifyContent:'center', textTransform: 'capitalize'}} onClick={() => setContact(navItem)}><Link href={navItem !== 'contact' ? `/${navItem}` : '/'}>{ navItem }</Link></ListItemButton>
                )) }
            </List>
        </AppBar>
    </Box>
    </ThemeProvider>
  )
}

export default Nav