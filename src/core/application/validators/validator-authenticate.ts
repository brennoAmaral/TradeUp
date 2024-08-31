import { EntityAuthenticate } from '@/entities/auth/authenticate-entity';
import * as Yup from 'yup';

export const validatorAuthenticateSchema: Yup.ObjectSchema<EntityAuthenticate> = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Campo obrigatório'),
});
