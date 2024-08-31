import { PaperProvider } from "react-native-paper";
import { darkTheme } from "./theme-config";

interface IThemeProvider {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: IThemeProvider) { 
  return (
    <PaperProvider theme={darkTheme}>
        {children}
    </PaperProvider>
  )
}