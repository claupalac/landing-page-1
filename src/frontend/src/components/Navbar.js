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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    padding: 20px;
    z-index: 1000;
  }
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
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo to="/">WebMakers</Logo>
        <NavLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/info">Info</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContainer>
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink to="/" onClick={toggleMobileMenu}>Inicio</NavLink>
          <NavLink to="/services" onClick={toggleMobileMenu}>Servicios</NavLink>
          <NavLink to="/info" onClick={toggleMobileMenu}>Info</NavLink>
          <NavLink to="/contact" onClick={toggleMobileMenu}>Contacto</NavLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar; 