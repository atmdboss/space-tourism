import React from 'react';

import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';

const PageTitle: React.FC<{ number: string; text: string }> = ({ number, text }) => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px

  return (
    <Typography
      component="p"
      variant="h6"
      align={isTablet ? 'left' : 'center'}
      sx={{ textTransform: 'uppercase', fontWeight: 300, letterSpacing: isTablet ? 4 : 2 }}
    >
      <Typography component="span" sx={{ color: 'rgba(255, 255, 255, 0.3)' }}>
        {number}
      </Typography>{' '}
      {text}
    </Typography>
  );
};

export default PageTitle;
