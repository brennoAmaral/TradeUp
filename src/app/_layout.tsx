import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import cacheConfig from "../core/domain/cache/cache-config";
import ThemeProvider from "../core/view/theme/theme-provider";
import useRootLayout from "./use-root-layout";

export default function Layout() {
  const {stackOptions, screenOptions} = useRootLayout()
  return (
    <QueryClientProvider client={cacheConfig}>
      <ThemeProvider>

        <Stack
          screenOptions={stackOptions}>
          <Stack.Screen  name="index" options={screenOptions} />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

