import * as Yup from 'yup';
import { EntityAuthenticate } from '../../domain/entities/auth/authenticate-entity';

export type IAuthenticateValidate = Yup.Schema<EntityAuthenticate>

export const validatorAuthenticateSchema: Yup.Schema<EntityAuthenticate> = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string()
    .min(3, 'A senha deve ter pelo menos 3 caracteres')
    .required('Campo obrigatório'),
});
