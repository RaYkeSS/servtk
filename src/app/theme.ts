'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          light: '#ebf3f8',
          main: '#2f3452',
          dark: '#63a6da',
          contrastText: '#4f4f65',
        },
      },
    },
    light: {
      palette: {
        primary: {
          light: '#ebf3f8',
          main: '#2f3452',
          dark: '#63a6da',
          contrastText: '#fff',
          // contrastText: '#4f4f65',
        },
      },
    },
  }
});

export default theme;
