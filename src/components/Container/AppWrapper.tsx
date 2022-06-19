import React, { PropsWithChildren } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>{children}</Box>
    </ThemeProvider>
  );
};

export default AppWrapper;

const theme = createTheme({
  typography: {
    fontFamily: ['Barlow', 'Bellefair', 'serif', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
});
