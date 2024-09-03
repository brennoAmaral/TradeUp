
import SvgSignOut from "@/components/svgs/sign-out-svg";
import tradeUpUseCases from "@/usecases/trade-up-use-cases";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import useRootLayout from "../use-root-layout";
export default function Layout() {
  const { stackOptions, screenOptions } = useRootLayout()

  const router = useRouter()
  const SignoutButton = () => (
    <TouchableOpacity onPress={() => tradeUpUseCases.signout(router)} >
        <SvgSignOut />
    </TouchableOpacity>
  )



  return (
    <Stack screenOptions={({route})=>({...stackOptions, headerShown: route.params ? false : true})}>
      <Stack.Screen
        name="index"
        options={{ ...screenOptions, title: 'Usuários', headerLeft: SignoutButton, headerTitleAlign: 'center', headerShown: true}}
      />
    </Stack>
  )
}


