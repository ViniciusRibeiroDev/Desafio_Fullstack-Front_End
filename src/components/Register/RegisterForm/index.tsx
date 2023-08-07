import { useContext } from 'react';
import { RegisterContext } from '../../../context/RegisterContext';
import { RegisterFormStyle } from './style';

const RegisterForm = () => {
  const { errors, handleSubmit, onSubmitRegister, register } =
    useContext(RegisterContext);

  return (
    <RegisterFormStyle onSubmit={handleSubmit(onSubmitRegister)}>
      <div>
        <label htmlFor='name'>Nome Completo</label>
        <input
          type='text'
          id='name'
          placeholder='Insira seu nome completo'
          {...register('nomeCompleto')}
        />
        <p>{errors.nomeCompleto?.message}</p>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Insira seu email'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor='password'>Senha</label>
        <input
          type='password'
          id='password'
          placeholder='Insira uma senha'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label htmlFor='telefone'>Telefone</label>
        <input
          type='tel'
          id='telefone'
          placeholder='Insira seu telefone'
          {...register('telefone')}
        />
        <p>{errors.telefone?.message}</p>
      </div>
      <button type='submit'>Cadastrar</button>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
