import styled from 'styled-components';

const Article = styled.article`
  width: ${ props => props.$width || '70%' };
  display: ${ props => props.$display || '' };
  margin: ${ props => props.$margin || '10px' };
  max-height: ${ props => props.$maxHeight || '' };
  height: ${ props => props.$height || '' };
  padding: ${ props => props.$padding || '10px' };
  background-color: ${ props => props.$backgroundColor || '#ffffff15' };
  border-radius: 10px;
  display: ${props => props.$display || ''};
  align-items: center;
  justify-content: ${props => props.$justifyContent || 'center'};
  text-align: ${props => props.$textAlign || ''};
  overflow-y: ${props => props.$overflowY || ''};

  @media (max-width: 1200px) {
    width: ${ props => props.$width1200 || '' };
    margin: ${ props => props.$margin1200 || '' };
  }

  @media (max-width: 500px) {
    width: 95%;
    align-self: center;
    margin: ${ props => props.$margin || '10px' };
    margin-top: ${ props => props.$marginTop || '40px' };
    max-height: ${ props => props.$maxHeight || '97.5%' };
    justify-self: center;
    padding: ${ props => props.$padding || '2px' };
  }

  @media (max-width: 400px) {
    margin: ${ props => props.$margin || '5px auto' };
  }
`;

export default Article;
