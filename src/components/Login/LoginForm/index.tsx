import { useContext } from 'react';
import { LoginContext } from '../../../context/LoginContext';
import { LoginFormStyle } from './style';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { onSubmitLogin, handleSubmit, errors, register } =
    useContext(LoginContext);

  const navigate = useNavigate();
  return (
    <LoginFormStyle onSubmit={handleSubmit(onSubmitLogin)}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          placeholder='Insira seu email'
          {...register('email')}
        />
        {errors.email?.message}
      </div>
      <div>
        <label htmlFor='password'>Senha</label>
        <input
          type='password'
          id='password'
          placeholder='Insira sua senha'
          {...register('password')}
        />
        {errors.password?.message}
      </div>
      <button type='submit'>Entrar</button>
      <button type='button' onClick={() => navigate('/cadastro')}>
        Cadastrar
      </button>
    </LoginFormStyle>
  );
};

export default LoginForm;
