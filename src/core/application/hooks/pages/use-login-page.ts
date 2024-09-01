import { DTOAuthenticateParams } from '@/DTO/auth/DTO-authenticate';
import tradeUpUseCases from '@/usecases/trade-up-use-cases';
import { validatorAuthenticateSchema } from '@/validators/validator-authenticate';
import { yupResolver } from '@hookform/resolvers/yup';
import { Router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

export default function useLoginPage(router: Router){
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [failedMessage, setFailedMessage] = useState<string>('')
  const form = useForm<DTOAuthenticateParams>({
    defaultValues:{
      email: '',
      password: ''
    },
    resolver: yupResolver(validatorAuthenticateSchema),
  })
  const onSubmit: SubmitHandler<DTOAuthenticateParams> = async (data)=> {
    setFailedMessage('')
    setIsLoading(true)
    const response = await tradeUpUseCases.authenticate(data, router)
    setIsLoading(false)
    if(response){
      setFailedMessage(response)
    }
  }

  useEffect(()=>{
    async function checkToken(){
      const token = await SecureStore.getItem('API_TOKEN_TRADE_UP')
      if(!token)return
      router.push('/Home')
    }

    setTimeout(() => {
      checkToken();
    }, 1000);
  },[])

  return {
    onSubmit,
    form,
    isLoading,
    failedMessage
  }
}