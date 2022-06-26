import React, { useState } from 'react';

import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import { destinations } from '../helpers/data';
import NavbarWrapper from '../components/Navigation/NavbarWrapper';
import DestinationImageMobile from '../assets/destination/background-destination-mobile.jpg';
import DestinationImageTablet from '../assets/destination/background-destination-tablet.jpg';
import DestinationImageDesktop from '../assets/destination/background-destination-desktop.jpg';
import PageTitle from '../components/Typography/PageTitle';

const Destination = () => {
  const [index, setIndex] = useState(0);
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return (
    <Root>
      <NavbarWrapper />

      <Container component="main" maxWidth="lg" sx={{ my: 2 }}>
        <PageTitle number="01" text="Pick Your Destination" />

        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ width: isDesktop ? 450 : isTablet ? 300 : 170, mx: 'auto' }}>
              <img src={destinations[index].images.png} width="100%" height="100%" alt={destinations[index].name} />
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ width: isDesktop ? 570 : isTablet ? 450 : 300, mx: 'auto' }}>
              <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {destinations.map((destination, destIndex) => {
                  return destIndex === index ? (
                    <ListItemActive key={destination.name} onClick={() => setIndex(destIndex)}>
                      <Typography component="p" align="center">
                        {destination.name}
                      </Typography>
                    </ListItemActive>
                  ) : (
                    <ListItem key={destination.name} onClick={() => setIndex(destIndex)}>
                      <Typography component="p" align="center">
                        {destination.name}
                      </Typography>
                    </ListItem>
                  );
                })}
              </Box>

              <Typography
                component="h3"
                variant="h2"
                align="center"
                sx={{ fontFamily: 'Bellefair', letterSpacing: 3, textTransform: 'uppercase', my: 5 }}
              >
                {destinations[index].name}
              </Typography>

              <Typography component="p" variant="body2" align="center" sx={{ mb: 3, lineHeight: 1.5 }}>
                {destinations[index].description}
              </Typography>

              <Divider light sx={{ borderColor: 'unset' }} />

              <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="overline" component="h6" align="center" sx={{ fontWeight: 300 }}>
                    Avg. Distance
                  </Typography>
                  <Typography variant="overline" component="p" align="center" sx={{ fontSize: 24, lineHeight: 1 }}>
                    {destinations[index].distance}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="overline" component="h6" align="center" sx={{ fontWeight: 300 }}>
                    Est. travel time
                  </Typography>
                  <Typography variant="overline" component="p" align="center" sx={{ fontSize: 24, lineHeight: 1 }}>
                    {destinations[index].travel}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default Destination;

const Root = styled(Box)(() => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return {
    width: '100vw',
    minHeight: '100vh',
    backgroundImage: `url(${isDesktop ? DestinationImageDesktop : isTablet ? DestinationImageTablet : DestinationImageMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflowX: 'hidden',
  };
});

const ListItem = styled('li')(() => ({
  listStyleType: 'none',
  position: 'relative',
  cursor: 'pointer',
  flex: 1,
  '&:hover': {
    '&::after': {
      content: "''",
      width: '50%',
      height: '3px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}));
const ListItemActive = styled(ListItem)(() => ({
  '&::after': {
    content: "''",
    width: '100%',
    height: '3px',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    right: 0,
  },
}));
