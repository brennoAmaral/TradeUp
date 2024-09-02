import Screen from "@/components/Screen/screen";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useLayoutEffect } from "react";
import { Image } from "react-native";

export default function Loading() {

  useLayoutEffect(() => {
    async function checkToken() {
      const token = await SecureStore.getItem('API_TOKEN_TRADE_UP')
      if (token) {
        router.replace('/users')
        return
      }
      router.replace('/login')
    }

    setTimeout(() => {
      checkToken();
    }, 1);
  }, [])

  return (
    <Screen style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }>
      <Image
        source={require('@/assets/images/banner.png')}
        style={{ height: 175, width: 175, borderRadius: 20 }}
      />
    </Screen>
  );
}