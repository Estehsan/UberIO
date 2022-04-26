import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00FF41',
    accent: '#f2f2f2',

    bg: '#1e1d20',

    lightgrey: '#868686',
    MenuGrey: '#868686',
    header: '#2C2C2E',
    grey: '#979797',
    lightbg: '#EAEAEA',
    white: '#fff',
    silver: '#9F9F9F',
    tblack: '#19181b',
    tred: '#f84563',
    twhite: '#f9f9fb',
    tgrey: '#C4C4C4',
    tbtn: '#f85c60',
    tabColor: '#313034',
    tabColorLight: '#31303432',
  },
  customShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  customShadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.21,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
