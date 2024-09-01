import cacheConfig from "@/cache/cache-config";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import useRootLayout from "./use-root-layout";
export default function Layout() {
  const {stackOptions, screenOptions} = useRootLayout()

  return (
    <QueryClientProvider client={cacheConfig}>
        <Stack
          screenOptions={stackOptions}>
          <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    </QueryClientProvider>
  )
}

