import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme-config";

export default function useTheme(){
  const colorScheme = useColorScheme()
  if(colorScheme === "dark") return darkTheme
  return lightTheme
} 