import styled from "styled-components";

export const ControlButton = styled.button`
  background-color: #0000ff20;
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  width: 20%;
  color: #b9d6f4;
  text-align: center;

  &:hover {
    background-color: #b9d6f4;
    color: #47425f;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
    padding: 5px;
  }
`;

export const SaveButton = styled.input`
  border: none;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  background-color: #13890f;
  color: #e1dbdb;
  text-align: center;
  margin: ${props => props.$margin || '3px'};
  
  &:hover {
    background-color: #e1dbdb;
    color: #13890f;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const CancelButton = styled.input`
  border: none;
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
  padding: ${props => props.$padding || '10px'};
  border-radius: ${props => props.$borderRadius || '10px'};
  width: ${props => props.$width || 'fit-content'};
  background-color: #89250f;
  color: #e1dbdb;
  margin: ${props => props.$margin || '3px'};
  
  &:hover {
    background-color: #e1dbdb;
    color: #89250f;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

export const NavMenuButton = styled.button`
  border: 0.5px solid #e1dbdb50;
  border-radius: 50px;
  padding: 10px;
  margin: 5px;
  position: ${props => props.$position || ''};
  z-index: ${props => props.$zIndex || ''};
  background-color: #47425f90;
  text-align: center;

  @media (min-width: 501px) {
    display: none;
  }
`;
