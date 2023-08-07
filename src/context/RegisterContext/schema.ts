import * as yup from 'yup';

const messageRequired = 'Este campo é obrigatório';

export const registerSchema = yup.object({
  nomeCompleto: yup.string().required(messageRequired),
  email: yup
    .string()
    .email('Insira um email valido!')
    .required(messageRequired),
  password: yup.string().required(messageRequired),
  telefone: yup.string().required(messageRequired),
});
