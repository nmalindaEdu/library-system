import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const getTheme = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Open Sans"',
        '"Noto Serif Sinhala"',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    icon: {
      primary: '#8f9bb3'
    },
    text: {
      primary: '#1a2138',
      secondary: '#8f9bb3',
      link: '#36f'
    },
    action: {
      hover: '#598bff',
      active: '#36f'
    },
    divider: '#edf1f7',

    overrides: {
      tableRow: {
        textColor: 'rgba(0, 0, 0, 0.26)'
      }
    },
    button: {
      primary: '#36f',
      success: '#00d68f',
      info: '#0095ff',
      warning: '#fa0',
      danger: '#ff3d71'
    },
    buttonHover: {
      primary: '#598bff',
      success: '#2ce69b',
      info: '#42aaff',
      warning: '#ffc94d',
      danger: '#ff708d'
    },
    buttonActive: {
      primary: '#274bdb',
      success: '#00b887',
      info: '#006fd6',
      warning: '#db8b00',
      danger: '#db2c66'
    }
  });

  return responsiveFontSizes(theme);
};

const theme = getTheme();

export default theme;
