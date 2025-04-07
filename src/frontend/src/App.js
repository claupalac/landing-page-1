import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Services from './pages/Services';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#86868b',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '56px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '48px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '17px',
      lineHeight: 1.47059,
    },
  },
});

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const PageContainer = styled(motion.div)`
  padding-top: 44px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/landing-page-1">
        <AppContainer>
          <Navbar />
          <AnimatePresence mode="wait">
            <PageContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
              </Routes>
            </PageContainer>
          </AnimatePresence>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App; 