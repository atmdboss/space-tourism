import React, { PropsWithChildren } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';

import LogoImage from '../../assets/shared/logo.svg';

const NavbarDesktop = () => {
  const loc = useLocation();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: '3rem' }}>
      {/* logo */}
      <SVGImage src={LogoImage} width="55" height="55" alt="logo" />

      <LinkWrapper>
        <CustomLink path="/" current={loc.pathname}>
          <StyledNavLink to="/">00 Home</StyledNavLink>
        </CustomLink>
        <CustomLink path="/destination" current={loc.pathname}>
          <StyledNavLink to="/destination">01 Destination</StyledNavLink>
        </CustomLink>
        <CustomLink path="/crew" current={loc.pathname}>
          <StyledNavLink to="/crew">02 Crew</StyledNavLink>
        </CustomLink>
        <CustomLink path="/technology" current={loc.pathname}>
          <StyledNavLink to="/technology">03 Technology</StyledNavLink>
        </CustomLink>
      </LinkWrapper>
    </Box>
  );
};

export default NavbarDesktop;

const SVGImage = styled('img')(() => ({
  margin: '1.5rem 3rem',
}));

const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  color: 'inherit',
  textTransform: 'uppercase',
  wordSpacing: 6,
  letterSpacing: 3,
  fontWeight: 300,
}));

const LinkWrapper = styled('ul')(({ theme }) => {
  const isXL = useMediaQuery(theme.breakpoints.up(1440));

  return {
    display: 'flex',
    alignItems: 'center',
    padding: '0 5rem',
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    position: 'relative',
    '&::before': {
      content: "''",
      width: isXL ? 'calc(62vw - 50%)' : '18rem',
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      position: 'absolute',
      left: isXL ? '-48%' : '-15rem',
    },
  };
});

const LinkItem = styled('li')(() => ({
  listStyleType: 'none',
  margin: '0 1.7rem',
  position: 'relative',
  lineHeight: 1.7,
  '&:hover': {
    '&::after': {
      content: "''",
      width: '100%',
      height: '3px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      position: 'absolute',
      bottom: '-37px',
      left: 0,
      right: 0,
    },
  },
}));

const LinkItemActive = styled(LinkItem)(() => ({
  '&::after': {
    content: "''",
    width: '100%',
    height: '3px',
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: '-37px',
    left: 0,
    right: 0,
  },
}));

const CustomLink: React.FC<PropsWithChildren & { path: string; current: string }> = ({ path, current, children }) => {
  return path === current ? <LinkItemActive>{children}</LinkItemActive> : <LinkItem>{children}</LinkItem>;
};
