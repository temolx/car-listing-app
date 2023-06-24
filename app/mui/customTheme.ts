import { createTheme } from '@mui/material'
// import { montserrat } from '../layout';

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    mainBlue?: PaletteColorOptions;
  }
  interface Palette {
    mainBlue: PaletteColor;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    mainBlue: any
  }
}


export const theme = createTheme({
    palette: {
      primary: {
        main: '#151515'
      },
      secondary: {
        main: '#fff'
      },
      mainBlue: {
        main: '#1A8DDC',
        contrastText: '#fff'
      }
    },

    typography: {
        h2: {
            fontSize: '70px',
            fontFamily: 'Montserrat',
            fontWeight: '200',
        },
        h3: {
          fontSize: '25px',
          fontFamily: 'Montserrat',
          fontWeight: '600',
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '18px',
          fontFamily: 'Montserrat',
          fontWeight: '700',
        },
        h6: {
          fontSize: '16px',
          fontFamily: 'Montserrat',
          fontWeight: '600',
        }
    },
  })