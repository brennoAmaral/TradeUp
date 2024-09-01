
import { Stack } from "expo-router";
import useRootLayout from "../use-root-layout";
export default function Layout() {
  const { stackOptions, screenOptions } = useRootLayout()

  return (
    <Stack
      screenOptions={{...stackOptions}}>
      <Stack.Screen name="index" options={{ ...screenOptions }} />
    </Stack>
  )
}

