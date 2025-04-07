import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InfoContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  background: #fff;
`;

const InfoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
`;

const InfoSection = styled(motion.section)`
  margin-bottom: 60px;
`;

const InfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

const Info = () => {
  return (
    <InfoContainer>
      <InfoContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </Title>
        
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InfoTitle>Our Mission</InfoTitle>
          <InfoText>
            We are dedicated to creating innovative solutions that transform the way people interact with technology.
            Our mission is to make technology more accessible, intuitive, and enjoyable for everyone.
          </InfoText>
        </InfoSection>
        
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <InfoTitle>Our Vision</InfoTitle>
          <InfoText>
            We envision a future where technology seamlessly integrates into everyday life,
            enhancing experiences rather than complicating them. We believe in creating products
            that are both beautiful and functional.
          </InfoText>
        </InfoSection>
        
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <InfoTitle>Our Values</InfoTitle>
          <InfoText>
            We value innovation, quality, and user experience above all else. We believe in
            continuous improvement and are always looking for ways to enhance our products
            and services.
          </InfoText>
        </InfoSection>
      </InfoContent>
    </InfoContainer>
  );
};

export default Info; 