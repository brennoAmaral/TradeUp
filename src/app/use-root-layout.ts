import useTheme from "@/theme/use-theme";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export default function useRootLayout() {
  const {colors} = useTheme()
  const backgroundColor = colors.backgroud;

  const stackOptions:NativeStackNavigationOptions  = {
    headerStyle: {
      backgroundColor: backgroundColor, 
    },
    headerTintColor: colors.primary, // Cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  const screenOptions:NativeStackNavigationOptions = {
    contentStyle: {
      backgroundColor: backgroundColor,
    },
  };

  return {
    stackOptions,
    screenOptions
  }
}
