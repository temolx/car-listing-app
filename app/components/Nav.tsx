'use client'

import AppBar from '@mui/material/AppBar';
import { Box, List, ListItemButton, CssBaseline, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import { theme } from '../mui/customTheme';

function Nav() {

    const navItems = ['shop', 'create', 'post', 'contact']

  return (
    <ThemeProvider theme={theme} >
    <CssBaseline />

    <Box>
        <AppBar >
            <List sx={{ display: 'flex' }}>
                { navItems.map((navItem) => (
                    <ListItemButton key={navItem} sx={{display:'flex', justifyContent:'center', textTransform: 'capitalize'}}><Link href={`/${navItem}`}>{ navItem }</Link></ListItemButton>
                )) }
            </List>
        </AppBar>
    </Box>
    </ThemeProvider>
  )
}

export default Nav