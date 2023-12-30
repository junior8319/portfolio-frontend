import styled from 'styled-components';

const NavBar = styled.nav`
  border-bottom: 0.5px solid #e6e6e6;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-evenly;
  height: 7vh;
  width: 100%;
  top: 0;
  left: 0;
  a {
    text-decoration: none;
    padding: 5px;
    margin: 5px;
  };
  a:hover {
    text-decoration: none;
    color: #fff;
    transition: 1s;
  };

  @media (max-width: 500px) {
    display: none;
  }

  @media (max-height: 400px) {
    height: 10vh;
  }
`;

export default NavBar;
