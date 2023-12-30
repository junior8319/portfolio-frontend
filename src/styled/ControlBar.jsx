import styled from 'styled-components';

const ControlBar = styled.nav`
  width: 100%;
  height: ${ props => props.$height || '8%' };
  padding: 0;
  background-color: #ffffff15;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 400px) {
    align-self: center;
    justify-self: center;
  }

  @media (max-height: 400px) {
    height: 15%;
  }
`;

export default ControlBar;
