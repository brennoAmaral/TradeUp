import cacheConfig from "@/core/view/cache/cache-config";
import LoginPage from "@/core/view/pages/login/login";
import { QueryClientProvider } from "@tanstack/react-query";


export default function LoginScreen() {
  return (
  <QueryClientProvider client={cacheConfig}>
    <LoginPage/>
  </QueryClientProvider>
  );
}

