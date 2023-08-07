import { createContext } from 'react';
import { ILoginContext, ISubmitLoginForm } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import api from '../../API';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './schema';
import { IAPIReturnToken, IProviderProps } from '../../interfaces';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export const LoginProvider = ({ children }: IProviderProps) => {
  const navigate: NavigateFunction = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitLoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitLogin: SubmitHandler<ISubmitLoginForm> = async (
    data
  ): Promise<void> => {
    try {
      const response = await api.post<IAPIReturnToken>('/login', data);

      localStorage.setItem('@TOKEN', response.data.token);
      navigate('/home');
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <LoginContext.Provider
      value={{ onSubmitLogin, register, handleSubmit, errors }}
    >
      {children}
    </LoginContext.Provider>
  );
};
