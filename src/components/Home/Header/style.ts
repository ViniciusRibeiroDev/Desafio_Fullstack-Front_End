import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;

  background-color: var(--primary-color);
  color: white;

  svg {
    width: 50px;
    height: 50px;

    cursor: pointer;
  }
`;

export const NavStyle = styled.nav`
  width: 70%;

  ul {
    display: flex;
    justify-content: space-around;

    list-style: none;

    li {
      cursor: pointer;

      font-weight: bold;
    }
  }
`;
