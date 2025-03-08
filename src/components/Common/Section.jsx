import styled from 'styled-components';
import { theme } from '../../Theme';

export const Section = styled.section`
  padding: ${props => props.spacing === 'large' ? 
    `${theme.spacing.xxl} 0` : 
    `${theme.spacing.xl} 0`};
  background-color: ${props => props.background || 'transparent'};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${props => props.spacing === 'large' ? 
      `${theme.spacing.xl} 0` : 
      `${theme.spacing.lg} 0`};
  }
`;