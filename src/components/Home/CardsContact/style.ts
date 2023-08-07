import styled from 'styled-components';

export const UlContactStyle = styled.ul`
  display: flex;

  flex-wrap: wrap;

  gap: 30px;
`;

export const LiContactStyle = styled.li`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color);
  color: white;

  width: 250px;
  height: 100px;

  border-radius: 5px;

  h3,
  p {
    margin: 5px;
  }
`;
