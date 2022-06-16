import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'poppins',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      bgBlack: 'rgba(18, 18, 18, 1)',
      opacityBlack: 'rgba(29, 29, 29, 0.5',
      primaryGreen: 'rgba(0, 242, 177, 1)',
      primaryBlue: 'rgba(71, 224, 255, 1)',
    },
    fontSizes: {
      1: '14px',
      2: '18px',
      3: '25px',
      4: '45px',
    },
  },
  media:{
    bp1: '(max-width: 1280px)'
  }
});