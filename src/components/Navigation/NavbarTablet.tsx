import React, { PropsWithChildren } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import LogoImage from '../../assets/shared/logo.svg';

const NavbarTablet = () => {
  const loc = useLocation();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* logo */}
      <SVGImage src={LogoImage} width="40" height="40" alt="logo" />

      <Box component="ul" sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255, 255, 255, 0.08)', px: '2rem' }}>
        <CustomLink path="/" current={loc.pathname}>
          <StyledNavLink to="/">Home</StyledNavLink>
        </CustomLink>
        <CustomLink path="/destination" current={loc.pathname}>
          <StyledNavLink to="/destination">Destination</StyledNavLink>
        </CustomLink>
        <CustomLink path="/crew" current={loc.pathname}>
          <StyledNavLink to="/crew">Crew</StyledNavLink>
        </CustomLink>
        <CustomLink path="/technology" current={loc.pathname}>
          <StyledNavLink to="/technology">Technology</StyledNavLink>
        </CustomLink>
      </Box>
    </Box>
  );
};

export default NavbarTablet;

const SVGImage = styled('img')(() => ({
  margin: '1.5rem',
}));

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: 'inherit',
  textTransform: 'uppercase',
  wordSpacing: 12,
  letterSpacing: 3,
  fontWeight: 300,
}));

const LinkItem = styled('li')(() => ({
  listStyleType: 'none',
  margin: '0 1rem',
  position: 'relative',
  lineHeight: 1.7,
}));

const LinkItemActive = styled(LinkItem)(() => ({
  '&::after': {
    content: "''",
    width: '100%',
    height: '3px',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: '-30px',
    left: 0,
    right: 0,
  },
}));

const CustomLink: React.FC<PropsWithChildren & { path: string; current: string }> = ({ path, current, children }) => {
  return path === current ? <LinkItemActive>{children}</LinkItemActive> : <LinkItem>{children}</LinkItem>;
};
