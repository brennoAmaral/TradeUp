import cacheConfig from "@/core/domain/cache/cache-config";
import LoginPage from "@/core/view/pages/login/login";
import ThemeProvider from "@/core/view/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";

export default function LoginScreen() {
  return (
    <QueryClientProvider client={cacheConfig}>
      <ThemeProvider>
        <LoginPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

