import React from 'react';

import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';

import NavbarWrapper from '../components/Navigation/NavbarWrapper';
import HomeImageMobile from '../assets/home/background-home-mobile.jpg';
import HomeImageTablet from '../assets/home/background-home-tablet.jpg';
import HomeImageDesktop from '../assets/home/background-home-desktop.jpg';

const Home = () => {
  return (
    <Root>
      <NavbarWrapper />

      <Box>Home</Box>
    </Root>
  );
};

export default Home;

const Root = styled(Box)(() => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${isDesktop ? HomeImageDesktop : isTablet ? HomeImageTablet : HomeImageMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
});
