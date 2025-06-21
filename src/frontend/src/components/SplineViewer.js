import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SplineContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  
  spline-viewer {
    width: 100%;
    height: 100%;
  }
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const PlaceholderTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PlaceholderText = styled.p`
  font-size: 18px;
  opacity: 0.8;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SplineViewer = ({ url }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Only load script if we have a valid URL
    if (!url || url === "undefined") {
      setHasError(true);
      return;
    }

    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
    };
    
    script.onerror = () => {
      setHasError(true);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup: remove the script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [url]);

  // Show placeholder if URL is undefined or there's an error
  if (!url || url === "undefined" || hasError) {
    return (
      <PlaceholderContainer>
        <PlaceholderTitle>3D Viewer</PlaceholderTitle>
        <PlaceholderText>
          Para mostrar contenido 3D, necesitas proporcionar una URL válida de Spline.
          <br />
          <br />
          Ejemplo: https://prod.spline.design/your-scene-url
        </PlaceholderText>
      </PlaceholderContainer>
    );
  }

  // Show loading state while script is loading
  if (!scriptLoaded) {
    return (
      <PlaceholderContainer>
        <PlaceholderTitle>Cargando 3D Viewer...</PlaceholderTitle>
        <PlaceholderText>Espera mientras se carga el contenido 3D</PlaceholderText>
      </PlaceholderContainer>
    );
  }

  return (
    <SplineContainer>
      <spline-viewer url={url}></spline-viewer>
    </SplineContainer>
  );
};

export default SplineViewer; 