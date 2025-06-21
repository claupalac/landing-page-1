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

const AppleStyleSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
    min-height: 80vh;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }
  
  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

const TextContent = styled(motion.div)`
  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #1d1d1f;
    line-height: 1.1;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  
  p {
    font-size: 20px;
    line-height: 1.6;
    color: #86868b;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  
  .highlight {
    color: #007aff;
    font-weight: 600;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%);
  z-index: -1;
`;

const AlternateSection = styled(AppleStyleSection)`
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
  
  ${SectionContent} {
    direction: rtl;
  }
  
  ${TextContent} {
    direction: ltr;
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

      {/* Estrategia de Negocio Section */}
      <AppleStyleSection>
        <BackgroundGradient />
        <SectionContent>
          <ImageContainer
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center" 
              alt="Web Development"
            />
          </ImageContainer>
          <TextContent
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Desarrollo <span className="highlight">Web</span></h2>
            <p>Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías. Desde React y Node.js hasta arquitecturas cloud, construimos soluciones robustas que crecen con tu negocio.</p>
          </TextContent>
        </SectionContent>
      </AppleStyleSection>

      {/* Colaboración en Equipo Section */}
      <AlternateSection>
        <SectionContent>
          <TextContent
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Gestión de <span className="highlight">Proyectos</span></h2>
            <p>Implementamos metodologías ágiles y DevOps para gestionar proyectos web de manera eficiente. Control de versiones, CI/CD, y despliegues automatizados para entregas rápidas y confiables.</p>
          </TextContent>
          <ImageContainer
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
              alt="Project Management"
            />
          </ImageContainer>
        </SectionContent>
      </AlternateSection>

      {/* Personalización Web Section */}
      <AppleStyleSection>
        <BackgroundGradient />
        <SectionContent>
          <ImageContainer
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center" 
              alt="Personalization"
            />
          </ImageContainer>
          <TextContent
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Personalización <span className="highlight">Web</span></h2>
            <p>Desarrollamos experiencias web personalizadas utilizando machine learning y análisis de comportamiento. Contenido dinámico, recomendaciones inteligentes y interfaces adaptativas que se ajustan a cada usuario.</p>
          </TextContent>
        </SectionContent>
      </AppleStyleSection>

      {/* Marketing Digital Section */}
      <AlternateSection>
        <SectionContent>
          <TextContent
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Experiencias de <span className="highlight">Usuario</span></h2>
            <p>Diseñamos interfaces intuitivas y experiencias de usuario excepcionales. Investigación de usuarios, prototipado, testing y optimización continua para crear productos web que los usuarios aman usar.</p>
          </TextContent>
          <ImageContainer
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center" 
              alt="User Experience"
            />
          </ImageContainer>
        </SectionContent>
      </AlternateSection>

      {/* Aseguramiento de Calidad Section */}
      <AppleStyleSection>
        <BackgroundGradient />
        <SectionContent>
          <ImageContainer
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&h=600&fit=crop&crop=center" 
              alt="Quality Assurance"
            />
          </ImageContainer>
          <TextContent
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Aseguramiento de <span className="highlight">Calidad</span></h2>
            <p>Implementamos testing automatizado, análisis de rendimiento y monitoreo continuo. Testing unitario, de integración y end-to-end para garantizar aplicaciones web robustas y libres de errores.</p>
          </TextContent>
        </SectionContent>
      </AppleStyleSection>

      {/* Arquitectura Técnica Section */}
      <AlternateSection>
        <SectionContent>
          <TextContent
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>Arquitectura <span className="highlight">Técnica</span></h2>
            <p>Diseñamos arquitecturas web escalables y mantenibles. Microservicios, APIs RESTful, bases de datos optimizadas y infraestructura cloud para aplicaciones web de alto rendimiento y disponibilidad.</p>
          </TextContent>
          <ImageContainer
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&crop=center" 
              alt="Technical Architecture"
            />
          </ImageContainer>
        </SectionContent>
      </AlternateSection>
    </HomeContainer>
  );
};

export default Home; 