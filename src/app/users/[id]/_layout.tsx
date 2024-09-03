
import { Stack } from "expo-router";
import useRootLayout from "../../use-root-layout";
export default function Layout() {
  const { stackOptions, screenOptions } = useRootLayout()

  return (
    <Stack screenOptions={{ ...stackOptions, headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ ...screenOptions, title: 'Detalhes do usuário', headerTitleAlign: 'center', headerShown: true, headerBackButtonMenuEnabled: true}}
      />
    </Stack>
  )
}


