import { DTOAuthenticateParams } from '@/DTO/auth/DTO-authenticate';
import tradeUpUseCases from '@/usecases/trade-up-use-cases';
import { validatorAuthenticateSchema } from '@/validators/validator-authenticate';
import { yupResolver } from '@hookform/resolvers/yup';
import { Router } from "expo-router";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useLoginPage(router: Router){
  const form = useForm<DTOAuthenticateParams>({
    resolver: yupResolver(validatorAuthenticateSchema),
  })
  const onSubmit: SubmitHandler<DTOAuthenticateParams> = (data)=> {
    tradeUpUseCases.authenticate(data, router)
  }

  return {
    onSubmit,
    form
  }
}