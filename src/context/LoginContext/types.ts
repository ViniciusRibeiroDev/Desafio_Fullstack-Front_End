import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface ILoginContext {
  register: UseFormRegister<ISubmitLoginForm>;
  handleSubmit: UseFormHandleSubmit<ISubmitLoginForm, undefined>;
  errors: FieldErrors<ISubmitLoginForm>;
  onSubmitLogin: SubmitHandler<ISubmitLoginForm>;
}

export interface ISubmitLoginForm {
  email: string;
  password: string;
}
