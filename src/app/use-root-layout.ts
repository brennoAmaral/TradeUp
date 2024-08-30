import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "../core/view/theme/theme-config";

export default function useRootLayout() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const backgroundColor = theme.colors.background;

  const stackOptions:NativeStackNavigationOptions  = {
    headerStyle: {
      backgroundColor: backgroundColor, // Cor do fundo do cabeçalho
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
