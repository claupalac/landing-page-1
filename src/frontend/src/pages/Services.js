import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  background: #fff;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const ServicesSection = styled(motion.section)`
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const ServiceText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ServiceCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const ServiceCardText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros servicios
        </Title>
        
        <ServicesSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ServiceTitle>Lo que ofrecemos</ServiceTitle>
          <ServiceText>
            Ofrecemos un amplio rango de servicios diseñados para satisfacer tus necesidades y superar tus expectativas.
            Nuestro equipo de expertos está dedicado a ofrecer soluciones de alta calidad que impulsan resultados.
          </ServiceText>
          
          <ServiceGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ServiceCardTitle>Desarrollo web</ServiceCardTitle>
              <ServiceCardText>
                Sitios web y aplicaciones web construidas con las últimas tecnologías para proporcionar una experiencia de usuario excepcional.
              </ServiceCardText>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ServiceCardTitle>Diseño UI/UX</ServiceCardTitle>
              <ServiceCardText>
                Interfaces atractivas e intuitivas que aumentan la participación y la satisfacción del usuario en todos los dispositivos.
              </ServiceCardText>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ServiceCardTitle>Marketing digital</ServiceCardTitle>
              <ServiceCardText>
                Soluciones de marketing estratégicas para aumentar la visibilidad, impulsar el tráfico y convertir visitantes en clientes.
              </ServiceCardText>
            </ServiceCard>
          </ServiceGrid>
        </ServicesSection>
        
        <ServicesSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ServiceTitle>Nuestro proceso</ServiceTitle>
          <ServiceText>
            Siguimos un método probado para garantizar el éxito de cada proyecto. Nuestro proceso es transparente,
            colaborativo y enfocado en entregar los mejores resultados para nuestros clientes.
          </ServiceText>
        </ServicesSection>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services; 