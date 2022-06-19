import React from 'react';
import { useMediaQuery } from '@mui/material';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import NavbarTablet from './NavbarTablet';

const NavbarWrapper = () => {
  const isTablet = useMediaQuery('(min-width:48rem)'); //768px
  const isDesktop = useMediaQuery('(min-width:64rem)'); //1024px

  return isDesktop ? <NavbarDesktop /> : isTablet ? <NavbarTablet /> : <NavbarMobile />;
};

export default NavbarWrapper;
