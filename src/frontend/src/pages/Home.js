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
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;

const ProductSection = styled.section`
  padding: 100px 20px;
  background: #fff;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled(motion.div)`
  background: #f5f5f7;
  border-radius: 18px;
  padding: 40px;
  text-align: center;
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
          
          
          <br />
          <img 
            src="/the_social_bird_logo.png" 
            alt="the_social_bird_logo" 
            style={{ maxWidth: '200px', height: 'auto' }}
          />
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience innovation at its finest. Discover what's possible when design meets technology.
        </Subtitle>
      </HeroSection>

      <ProductSection>
        <ProductGrid>
          <ProductCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Feature 1</h2>
            <p>Discover the power of innovation</p>
          </ProductCard>
          <ProductCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Feature 2</h2>
            <p>Experience seamless integration</p>
          </ProductCard>
          <ProductCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Feature 3</h2>
            <p>Unleash your creativity</p>
          </ProductCard>
        </ProductGrid>
      </ProductSection>
    </HomeContainer>
  );
};

export default Home; 