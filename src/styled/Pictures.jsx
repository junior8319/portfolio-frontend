import styled from 'styled-components';

export const NormalPicture = styled.img`
  width: ${props => props.$width || '200px'};
  height: ${props => props.$width || '250px'};
  background: none;
  border-radius: 10px;
  position: relative;
  top: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
  margin: ${props => props.$margin || '10px'};

  @media (max-width: 1100px) {
    width: ${props => props.$width || '200px'};
    height: ${props => props.$width || '250px'};
    max-width: ${props => props.$maxWidth || ''};
    max-height: ${props => props.$maxHeight || ''};
  }

  @media (max-width: 700px) {
    justify-self: center;
    text-align: center;
    align-self: center;
    margin: 10px auto;
  }

  @media (max-height: 400px) {
    width: ${props => props.$widthH400 || '200px'};
    height: ${props => props.$heightH400 || '130px'};
  }
`;

export const CardPicture = styled.img`
  width: ${props => props.$width || '100px'};
  background: none;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 100, 0.5);

  @media (max-width: 1100px) {
    max-width: 75px;
  }

  @media (max-width: 700px) {
    text-align: center;
    align-self: center;
    margin: 7.5px auto;
  }
`;

export const ProjectPicture = styled.img`
  border-radius: 5px;
  max-height: ${props => props.$maxHeight || '300px'};
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  justify-self: center;
`;
