import styled from "styled-components";

export const StyledLoading = styled.div`
  font-size: ${props => props.$fontSize || '32px' };
  border: ${props => props.$border || ''};;
  text-align: center;
  margin-top: ${props => props.$marginTop || 'auto'};
  margin-bottom: ${props => props.$marginBottom || 'auto'};
  height: ${props => props.$height || '60px'};
  color: #000;
  animation: colorChange 2.90s infinite;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  

  @keyframes colorChange {
    10% {
      color: #bfc4ea10;
    }
    20% {
      color: #bfc4ea20; /* Altere a cor desejada */
    }
    30% {
      color: #bfc4ea30; /* Altere a cor desejada */
    }
    40% {
      color: #bfc4ea40;
    }
    50% {
      color: #bfc4ea50;
    }
    60% {
      color: #bfc4ea60;
    }
    70% {
      color: #bfc4ea70;
    }
    80% {
      color: #bfc4ea80;
    }
    90% {
      color: #bfc4ea90;
    }
    100% {
      color: #bfc4ea;
    }
  }
`;

export const BiggerLetter = styled.span`
  font-size: ${props => props.$fontSize || '52px'};
  margin: 5px;
  color: #371a0b;
  background-color: transparent;
  align-self: center;
`;
