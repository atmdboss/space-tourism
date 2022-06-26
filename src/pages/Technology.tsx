import React, { useState } from 'react';

import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { technology } from '../helpers/data';
import NavbarWrapper from '../components/Navigation/NavbarWrapper';
import TechnologyImageMobile from '../assets/technology/background-technology-mobile.jpg';
import TechnologyImageTablet from '../assets/technology/background-technology-tablet.jpg';
import TechnologyImageDesktop from '../assets/technology/background-technology-desktop.jpg';
import PageTitle from '../components/Typography/PageTitle';

const Technology = () => {
  const [index, setIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  const updateIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <Root>
      <NavbarWrapper />

      <Box sx={{ mt: 3, mb: 6, ml: '6rem' }}>
        <PageTitle number="03" text="Space Launch 101" />
      </Box>

      <Grid container spacing={2} sx={{ flexDirection: isDesktop ? 'row-reverse' : 'column' }}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ width: isDesktop ? 'unset' : '100%' }}>
            <img src={technology[index].images[isDesktop ? 'portrait' : 'landscape']} width="100%" height="100%" alt={technology[index].name} />
          </Box>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Box sx={{ ml: isDesktop ? '6rem' : 'unset', display: 'flex', flexDirection: isDesktop ? 'row' : 'column' }}>
            <Box>
              <CarouselSteps index={index} updateIndex={updateIndex} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 2 }}>
              <Typography variant="overline" component="h3" textAlign={isDesktop ? 'left' : 'center'} sx={{ fontFamily: 'Bellefair', fontSize: 12 }}>
                The Terminology...
              </Typography>

              <Typography
                variant="overline"
                component="h4"
                textAlign={isDesktop ? 'left' : 'center'}
                sx={{ fontFamily: 'Bellefair', fontSize: 32, lineHeight: 1.5, mb: 2 }}
              >
                {technology[index].name}
              </Typography>

              <Typography variant="h6" component="p" textAlign={isDesktop ? 'left' : 'center'} sx={{ fontWeight: 300 }}>
                {technology[index].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Technology;

const Root = styled(Box)(() => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: `url(${isDesktop ? TechnologyImageDesktop : isTablet ? TechnologyImageTablet : TechnologyImageMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflowX: 'hidden',
    paddingBottom: '2rem',
  };
});

const CarouselSteps: React.FC<{ index: number; updateIndex: (newIndex: number) => void }> = ({ index, updateIndex }) => {
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  const renderStep = () => {
    const steps = [];

    for (let i = 0; i < 3; i++) {
      steps.push(
        <Box
          key={i}
          onClick={() => updateIndex(i)}
          sx={{
            width: isDesktop ? 50 : 40,
            height: isDesktop ? 50 : 40,
            borderRadius: '50%',
            cursor: 'pointer',
            bgcolor: index === i ? '#ffffff' : 'transparent',
            color: index === i ? '#000000' : '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            '&:hover': {
              border: '1px solid #ffffff',
            },
          }}
        >
          {i + 1}
        </Box>
      );
    }

    return steps;
  };

  return (
    <Box
      sx={{
        width: isDesktop ? 'unset' : 250,
        p: 1,
        display: 'flex',
        flexDirection: isDesktop ? 'column' : 'row',
        height: isDesktop ? 300 : 'unset',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mx: isDesktop ? 'unset' : 'auto',
        order: isDesktop ? 1 : 0,
        mt: isDesktop ? '8rem' : 1,
        mb: 2,
      }}
    >
      {renderStep()}
    </Box>
  );
};
