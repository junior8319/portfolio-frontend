import styled from 'styled-components';

const Content = styled.article`
  overflow-y: auto;
  overflow-x: hidden;
  width: ${ props => props.$width || '100%' };
  height: ${ props => props.$height || '85%' };
  border-radius: 10px 10px 0 0;
  margin: 0 auto;

  @media (max-width: 400px) {
    overflow: hidden;
  }
`;

export default Content;
