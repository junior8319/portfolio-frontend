import styled from 'styled-components';

export const Title1 = styled.h1`
  font-size: 1.4rem;
  background: none;
  padding: 5px 0;

  @media (max-width: 1100px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
    width: 100%;
  }

  @media (max-height: 400px) {
    font-size: 1.1rem;
  }
`;

export const Title2 = styled.h2`
  font-size: 1.1rem;
  background: none;
  padding: 5px 0;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
    width: 100%;
  }

  @media (max-height: 400px) {
    font-size: 0.9rem;
  }
`;

export const Title3 = styled.h3`
  font-size: 1.0rem;
  background: none;
  padding: 5px 0;

  @media (max-width: 1100px) {
    font-size: 0.95rem;
  }

  @media (max-width: 400px) {
    font-size: 0.85rem;
    width: 100%;
  }

  @media (max-height: 400px) {
    font-size: 0.85rem;
  }
`;
