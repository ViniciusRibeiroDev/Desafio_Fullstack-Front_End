import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IRegisterContext {
  register: UseFormRegister<ISubmitRegisterForm>;
  handleSubmit: UseFormHandleSubmit<ISubmitRegisterForm, undefined>;
  errors: FieldErrors<ISubmitRegisterForm>;
  onSubmitRegister: SubmitHandler<ISubmitRegisterForm>;
}

export interface ISubmitRegisterForm {
  nomeCompleto: string;
  email: string;
  password: string;
  telefone: string;
}

export interface IRegisterProviderProps {
  children: React.ReactNode;
}
