import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#444444',
  gray: '#656565',
  'oshi-red': '#FF6363',
  'oshi-orange': '#FFB546',
  'oshi-yellow': '#FFF067',
  'oshi-green': '#96F19F',
  'oshi-blue': '#638FFF',
  'oshi-purple': '#BF7EFF',
  'oshi-pink': '#FFA0D9',
  'oshi-black': '#7D7D7D',
  'oshi-white': '#F4F4F4',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
    '::selection': {
      background: 'black',
    },
    '::-moz-selection': {
      background: 'black',
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
  // example
};
const textStyles = {
  bodyWidth: {
    width: {
      base: '90vw',
      sm: '80vw',
    },
    mx: 'auto',
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
