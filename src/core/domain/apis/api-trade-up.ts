import Fetcher from "@/fetcher/fetcher";
import * as SecureStore from "expo-secure-store";

export function apiTradeUp() {
  let API = process.env.EXPO_PUBLIC_API_URL ?? "";
  let token = SecureStore.getItem("API_TOKEN_TRADE_UP") ?? "";

  return new Fetcher(API, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}
