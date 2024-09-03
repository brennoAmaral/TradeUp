import { DTOAuthenticateParams } from "@/DTO/auth/DTO-authenticate";
import tradeUpRepository from "@/repositories/trade-up-repository";
import { Router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default async function useCaseTradeUpAuthenticate(params: DTOAuthenticateParams, router: Router):Promise<string|void>{
  const { token } = await tradeUpRepository.authenticate(params);
  if(!token)return 'E-mail ou senha incorreto!'
  await SecureStore.setItemAsync("API_TOKEN_TRADE_UP", token);
  router.navigate("/users");
}
