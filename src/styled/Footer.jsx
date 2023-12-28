import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 99%;
  height: 8vh;
  position: ${props => props.$position || 'relative'};
  text-align: center;

  @media (max-width: 500px) {
    position: fixed;
    bottom: 2px;
  }
`;

export const FooterContent = styled.article`
  width: 98%;
  height: 95%;
  background-color: #383247;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  border: 0.8px solid #878673;

  a {
    text-decoration: none;
    width: fit-content;
    font-size: 0.8rem;
    height: 80%;
    margin: 5px;
    background-color: transparent;
    border: 0.5px solid #e1dbdb;
    margin: auto;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 10px;

    @media (max-width: 550px) {
      font-size: 0.5rem;
      margin: 3px;
    }
  };
  a:hover {
    text-decoration: none;
    color: #fff;
    transition: 1s;
  };
`;

export const FooterItem = styled.div`
  height: 70%;
  width: ${props => props.$width || '20%'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #e1dbdb;
  border-radius: 20px;
`;
