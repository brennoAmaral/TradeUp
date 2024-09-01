import useTheme from "@/theme/use-theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export default function useRootLayout() {
  const theme = useTheme()
  const backgroundColor = theme.colors.backgroud;

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
    headerShown: false,
    contentStyle: {
      backgroundColor: backgroundColor,
    },
  };

  return {
    stackOptions,
    screenOptions
  }
}
