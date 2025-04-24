import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const HomeContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background: #000;
  color: #fff;
`;

const Title = styled(motion.h1)`
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  img {
    max-width: 200px;
    height: auto;
    
    @media (max-width: 768px) {
      max-width: 150px;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
  }
`;

const ProductSection = styled.section`
  padding: 100px 20px;
  background: #fff;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProductCard = styled(motion.div)`
  background: #f5f5f7;
  border-radius: 18px;
  padding: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 15px;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  p {
    font-size: 16px;
    color: #555;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenid@ a tu landing page
          <br />
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Impacta tu negocio con una landing page profesional y atractiva.
        </Subtitle>
      </HeroSection>

      <ProductSection>
        <ProductGrid>
          <ProductCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Diseño profesional</h2>
            <p>Diseño profesional y atractivo para tu landing page.</p>
          </ProductCard>
          <ProductCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Diseño responsivo</h2>
            <p>Diseño responsivo para cualquier dispositivo.</p>
          </ProductCard>
          <ProductCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Diseño personalizado</h2>
            <p>Diseño personalizado para tu landing page.</p>
          </ProductCard>
        </ProductGrid>
      </ProductSection>
    </HomeContainer>
  );
};

export default Home; 