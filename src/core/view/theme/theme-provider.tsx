import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "./theme-config";

interface IThemeProvider {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: IThemeProvider) {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
        {children}
    </PaperProvider>
  )
}