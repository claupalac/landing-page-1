import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { submitContactForm } from '../services/api';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  background: #f5f5f7;
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 12px;
  }
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const Button = styled(motion.button)`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #333;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #4caf50;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`;

const ErrorMessage = styled(motion.div)`
  background: #f44336;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      console.log('Submitting form with data:', formData);
      // Send form data to the backend
      await submitContactForm(formData);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <ContactContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contáctanos
        </Title>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Asunto</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Mensaje</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>
          
          <Button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </Form>
        
        {submitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </SuccessMessage>
        )}
        
        {error && (
          <ErrorMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </ErrorMessage>
        )}
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 