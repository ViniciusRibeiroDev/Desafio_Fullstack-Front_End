import * as yup from 'yup';

export const editProfileSchema = yup.object({
  nomeCompleto: yup.string().optional(),
  email: yup.string().email('Insira um email valido!').optional(),
  password: yup.string().optional(),
  telefone: yup.string().optional(),
});
