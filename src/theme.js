import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f03030',
    },
    secondary: {
      main: '#EB5757',
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
      primary: '#000000',
      secondary: '#ff3030',
      disabled: '#bdbdbd',
      hint: '#bdbdbd',
    },
    divider: '#bdbdbd',
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightBold: 600,
  },
  components: {
    // MuiAppBar: {
    //   defaultProps: {
    //     color: 'default',
    //   },
    // },
    MuiInputBase: {
      defaultProps: {
        border: "1px",
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