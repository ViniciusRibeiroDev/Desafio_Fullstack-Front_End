import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import api from '../../API';
import { registerSchema } from './schema';
import {
  IRegisterContext,
  IRegisterProviderProps,
  ISubmitRegisterForm,
} from './type';
import { createContext } from 'react';
import { IAPIReturnUser } from '../../interfaces';
import { toast } from 'react-toastify';

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

export const RegisterProvider = ({ children }: IRegisterProviderProps) => {
  const navigate: NavigateFunction = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitRegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmitRegister: SubmitHandler<ISubmitRegisterForm> = async (
    data
  ): Promise<void> => {
    try {
      await api.post<IAPIReturnUser>('/users', data);

      toast.success('Conta criada', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/');
    } catch (err) {
      toast.error(`${err}`, {
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
    <RegisterContext.Provider
      value={{ onSubmitRegister, register, handleSubmit, errors }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
