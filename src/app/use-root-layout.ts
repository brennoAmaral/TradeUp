import { darkTheme } from "@/theme/theme-config";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export default function useRootLayout() {

  const backgroundColor = darkTheme.colors.background;

  const stackOptions:NativeStackNavigationOptions  = {
    headerStyle: {
      backgroundColor: backgroundColor, 
    },
    headerTintColor: "#fff", // Cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  const screenOptions:NativeStackNavigationOptions = {
    title: "Login",
    contentStyle: {
      backgroundColor: backgroundColor,
    },
  };

  return {
    stackOptions,
    screenOptions
  }
}
