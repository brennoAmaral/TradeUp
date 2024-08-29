import cacheConfig from "@/core/view/cache/cache-config";
import LoginPage from "@/core/view/pages/login/login";
import { themeConfig } from "@/core/view/theme/theme-config";
import { QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider } from "react-native-paper";

export default function LoginScreen() {
  return (
    <QueryClientProvider client={cacheConfig}>
      <PaperProvider theme={themeConfig}>
        <LoginPage />
      </PaperProvider >
    </QueryClientProvider>
  );
}

