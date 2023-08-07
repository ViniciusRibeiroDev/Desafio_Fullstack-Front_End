import * as yup from 'yup'

const messageRequired = 'Este campo é obrigatório'

export const loginSchema = yup.object({
  email: yup.string().email('Insira um email valido!').required(messageRequired),
  password: yup.string().required(messageRequired)
})