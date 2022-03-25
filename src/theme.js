import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f03030',
      dark: '#b22121',
      light: '#ff5959',

    },
    secondary: {
      main: '#EB5757',
      dark: '#a43c3c',
      light: '#ef7878',
    },
    info: {
      main: '#2081e2',
    },
    neutral: {
      main: '#BDBDBD',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#4F4F4F',
      secondary: grey,
      disabled: grey.A400,
      hint: grey.A400,
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightBold: 600,
    htmlFontSize: 20,
    button: {
      textTransform: 'none',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: 'black',
    },
  },

  components: {
    // MuiButton: {
    //   defaultProps: {
    //     border: 8,
    //   },
    // },
    MuiInputBase: {
      defaultProps: {
        border: 1,
        color: '#BDBDBD',
      },
    },
  },
  shape: {
    borderRadius: 5,
  }
  
});

// theme = createTheme(theme, {
//   palette: {
//     info: {
//       main: theme.palette.secondary.main,
//     },
//   }
// });

export default theme;