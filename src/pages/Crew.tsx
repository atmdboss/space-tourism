import React, { useState } from 'react';

import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import NavbarWrapper from '../components/Navigation/NavbarWrapper';
import CrewImageMobile from '../assets/crew/background-crew-mobile.jpg';
import CrewImageTablet from '../assets/crew/background-crew-tablet.jpg';
import CrewImageDesktop from '../assets/crew/background-crew-desktop.jpg';
import PageTitle from '../components/Typography/PageTitle';
import { crew } from '../helpers/data';

const Crew = () => {
  const [index, setIndex] = useState(0);
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  const updateIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <Root>
      <NavbarWrapper />

      <Container component="main" maxWidth="lg" sx={{ mt: 4 }}>
        <PageTitle number="02" text="Meet Your Crew" />

        <Grid container spacing={2}>
          {/* IMAGE */}
          <Grid item xs={12} lg={6} sx={{ order: isTablet ? 1 : 0 }}>
            <Box sx={{ width: isDesktop ? 500 : isTablet ? 400 : 200, mx: 'auto', mt: 2 }}>
              <img src={crew[index].images.png} width="100%" height="100%" alt={crew[index].name} />
            </Box>
          </Grid>

          {/* TEXT */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              order: isTablet ? 0 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CarouselSteps index={index} updateIndex={updateIndex} />

              <Box sx={{ order: isDesktop ? 0 : 1 }}>
                <Typography
                  variant="overline"
                  component="h3"
                  textAlign={isDesktop ? 'left' : 'center'}
                  sx={{ fontFamily: 'Bellefair', fontSize: 28, color: 'rgba(255, 255, 255, 0.3)', lineHeight: 1.5 }}
                >
                  {crew[index].role}
                </Typography>

                <Typography
                  variant="overline"
                  component="h4"
                  textAlign={isDesktop ? 'left' : 'center'}
                  sx={{ fontFamily: 'Bellefair', fontSize: 32, lineHeight: 1.5, mb: 4 }}
                >
                  {crew[index].name}
                </Typography>

                <Typography variant="h6" component="p" textAlign={isDesktop ? 'left' : 'center'} sx={{}}>
                  {crew[index].bio}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Crew;

const Root = styled(Box)(() => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: `url(${isDesktop ? CrewImageDesktop : isTablet ? CrewImageTablet : CrewImageMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  };
});

const CarouselSteps: React.FC<{ index: number; updateIndex: (newIndex: number) => void }> = ({ index, updateIndex }) => {
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  const renderStep = () => {
    const steps = [];

    for (let i = 0; i < 4; i++) {
      steps.push(
        <Box
          key={i}
          onClick={() => updateIndex(i)}
          sx={{ width: 20, height: 20, borderRadius: '50%', cursor: 'pointer', bgcolor: index === i ? '#ffffff' : 'rgba(255, 255, 255, 0.3)' }}
        />
      );
    }

    return steps;
  };

  return (
    <Box
      sx={{
        width: 250,
        p: 1,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mx: 'auto',
        order: isDesktop ? 1 : 0,
        mt: isDesktop ? '8rem' : 1,
        mb: 2,
      }}
    >
      {renderStep()}
    </Box>
  );
};
