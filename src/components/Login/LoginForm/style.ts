import styled from 'styled-components';

export const LoginFormStyle = styled.form`
  background-color: var(--primary-color);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;

  width: 500px;
  height: 300px;

  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
  }
`;
