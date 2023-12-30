import styled from 'styled-components';

const StacksContainer = styled.section`
  background-color: ${ props => props.$backgroundColor || '#ffffff15' };
  width: ${ props => props.$width || '45%' };
  height: ${ props => props.$height || '92.5%' };
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: ${ props => props.$padding || '10px' };
  margin: ${ props => props.$margin || '10px' };

  article:hover {
    background-color: #0000ff20;
    transition: 1s;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin: 10px;
  }

  @media (max-width: 500px) {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
    margin: ${ props => props.$margin || '5px auto' };
  }
`;

export default StacksContainer;