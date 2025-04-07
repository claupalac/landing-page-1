import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useScroll } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 2px;
  background: #000;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">The Social Bird</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/info">Info</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 