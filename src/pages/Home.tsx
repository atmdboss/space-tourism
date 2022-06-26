import React from 'react';

import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NavbarWrapper from '../components/Navigation/NavbarWrapper';
import HomeImageMobile from '../assets/home/background-home-mobile.jpg';
import HomeImageTablet from '../assets/home/background-home-tablet.jpg';
import HomeImageDesktop from '../assets/home/background-home-desktop.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return (
    <Root>
      <NavbarWrapper />

      <Box
        component="main"
        sx={{
          py: isTablet ? '4rem' : '2rem',
          px: '2.2rem',
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          justifyContent: isDesktop ? 'center' : 'space-between',
          alignItems: 'center',
          height: '90%',
        }}
      >
        {/* text */}
        <Box sx={{ textAlign: isDesktop ? 'left' : 'center', width: isDesktop ? '50%' : 'auto', pl: isDesktop ? '2rem' : 0 }}>
          <Typography sx={{ fontFamily: 'Barlow', fontWeight: 300, letterSpacing: 3 }}>SO, YOU WANT TO TRAVEL TO</Typography>
          <Typography sx={{ fontFamily: 'Bellefair', fontSize: isTablet ? 120 : 48, my: '1.2rem', letterSpacing: 4 }}>SPACE</Typography>
          <Typography sx={{ fontFamily: 'Barlow', fontWeight: 300, letterSpacing: 2, mx: isDesktop ? 0 : isTablet ? '5rem' : 0 }}>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world experience!
          </Typography>
        </Box>

        {/* image */}
        <Box sx={{ width: isDesktop ? '50%' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button onClick={() => navigate('/destination')}>
            <Typography sx={{ fontFamily: 'Bellefair', fontSize: 24, color: '#000000' }}>EXPLORE</Typography>
          </Button>
        </Box>
      </Box>
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
    overflowY: 'hidden',
  };
});

const Button = styled(Box)(() => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px

  return {
    width: isTablet ? 250 : 200,
    height: isTablet ? 250 : 200,
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.15)',
      borderRadius: '50%',
      transition: 'width 300ms ease-in-out, height 300ms ease-in-out',
    },
    '&:hover': {
      cursor: 'pointer',
      '&::after': {
        width: '170%',
        height: '170%',
      },
    },
  };
});
