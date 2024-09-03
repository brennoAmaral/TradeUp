import { Router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default async function useCaseTradeUpSignout(router: Router){
  SecureStore.deleteItemAsync("API_TOKEN_TRADE_UP");
  router.replace("/login");
}
