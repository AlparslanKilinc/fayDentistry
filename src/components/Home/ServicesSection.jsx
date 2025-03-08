import React from 'react';
import styled from 'styled-components';
import { theme } from '../../Theme';
import { ServiceCard } from './ServiceCard';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { motion } from 'framer-motion';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text};
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.primary};
    margin: ${theme.spacing.sm} auto 0;
  }
`;

export const ServicesSection = () => {
  const services = [
    {
      title: 'PREVENTATIVE DENTISTRY',
      description: 'Regular check-ups and cleanings to maintain your oral health and prevent future problems.',
      image: '/path/to/preventative-image.jpg',
      link: '/preventative-dentistry',
      color: 'rgb(73, 190, 138)',
    },
    {
      title: 'RESTORATIVE DENTISTRY',
      description: 'Restore damaged or missing teeth with fillings, crowns, bridges, and implants.',
      image: '/path/to/restorative-image.jpg',
      link: '/restorative-dentistry',
      color: 'rgb(86, 178, 216)',
    },
    {
      title: 'COSMETIC DENTISTRY',
      description: 'Enhance your smile with whitening, veneers, and other aesthetic treatments.',
      image: '/path/to/cosmetic-image.jpg',
      link: '/cosmetic-dentistry',
      color: 'rgb(79, 116, 176)',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <Section>
      <Container>
        <SectionTitle>Our Dental Services</SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </Section>
  );
};