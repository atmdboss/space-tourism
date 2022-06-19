import React, { PropsWithChildren, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import LogoImage from '../../assets/shared/logo.svg';
import HamburgerImage from '../../assets/shared/icon-hamburger.svg';
import CloseImage from '../../assets/shared/icon-close.svg';

const NavbarMobile = () => {
  const loc = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '1rem', py: '1.2rem' }}>
      {/* logo */}
      <SVGImage src={LogoImage} width="25" height="25" alt="logo" />

      {/* hamburger */}
      <SVGImage src={HamburgerImage} width="25" height="15" alt="hamburger menu icon" onClick={handleOpen} />

      {/* links menu - hidden to the side */}
      <LinksMenu sx={{ right: isOpen ? 0 : '-275px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <SVGImage src={CloseImage} width="25" height="25" alt="close icon" onClick={handleClose} />
        </Box>

        <Box component="ul" sx={{ my: '3rem' }}>
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
        </Box>
      </LinksMenu>
    </Box>
  );
};

export default NavbarMobile;

const SVGImage = styled('img')(() => ({}));

const LinksMenu = styled(Box)(() => ({
  width: '275px',
  height: '100vh',
  position: 'fixed',
  right: '-275px',
  top: 0,
  transition: 'right 300ms ease-in-out',
  backdropFilter: 'blur(30px)',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  padding: '2rem',
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
  margin: '1.5rem 0',
  position: 'relative',
  lineHeight: 1.7,
}));

const LinkItemActive = styled(LinkItem)(() => ({
  '&::after': {
    content: "''",
    width: '5px',
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    right: 0,
  },
}));

const CustomLink: React.FC<PropsWithChildren & { path: string; current: string }> = ({ path, current, children }) => {
  return path === current ? <LinkItemActive>{children}</LinkItemActive> : <LinkItem>{children}</LinkItem>;
};
