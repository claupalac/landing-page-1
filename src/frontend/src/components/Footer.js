import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 80px 20px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 12px;
  }
  
  a {
    color: #86868b;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #fff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    font-size: 24px;
    color: #fff;
    transition: color 0.3s ease;
    
    &:hover {
      color: #007aff;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding-top: 20px;
  border-top: 1px solid #444;
  text-align: center;
  font-size: 14px;
  color: #86868b;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Sobre Nosotros</h3>
          <p style={{ color: '#86868b', fontSize: '14px', lineHeight: '1.6' }}>
            Somos un equipo de desarrolladores apasionados por crear soluciones web innovadoras y de alta calidad.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/info">Sobre Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h3>Contacto</h3>
          <p style={{ color: '#86868b', fontSize: '14px', lineHeight: '1.6' }}>
            Cercado<br />
            Cochabamba, Bolivia<br />
            <a href="mailto:clausspal97@gmail.com">clausspal97@gmail.com</a>
          </p>
        </FooterColumn>
        <FooterColumn>
          <h3>Síguenos</h3>
          <SocialLinks>
            <a href="https://www.linkedin.com/in/claudio-palacios-764638160" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/claupalac/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialLinks>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} WebMakers. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 