import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InfoContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  background: #fff;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
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
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const InfoSection = styled(motion.section)`
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const InfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
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
          Sobre nosotros
        </Title>
        
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InfoTitle>Nuestra misión</InfoTitle>
          <InfoText>
            Nos dedicamos a crear soluciones innovadoras que transforman la forma en que las personas interactúan con la tecnología.
            Nuestra misión es hacer que la tecnología sea más accesible, intuitiva y entretenida para todos.
          </InfoText>
        </InfoSection>
        
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <InfoTitle>Nuestra visión</InfoTitle>
          <InfoText>
            Nos proyectamos a un futuro donde la tecnología se integra de manera sin esfuerzo en la vida cotidiana,
            mejorando las experiencias en lugar de complicarlas. Creemos en crear productos
            que son tanto hermosos como funcionales.
          </InfoText>
        </InfoSection>
        
        <InfoSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <InfoTitle>Nuestros valores</InfoTitle>
          <InfoText>
            Valoramos la innovación, la calidad y la experiencia del usuario por encima de todo. Creemos en
            el constante mejoramiento y siempre buscamos formas de mejorar nuestros productos
            y servicios.
          </InfoText>
        </InfoSection>
      </InfoContent>
    </InfoContainer>
  );
};

export default Info; 