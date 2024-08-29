import { MD3LightTheme } from "react-native-paper";

// export type IPallete = Pick<MD3Theme['colors'], 'primary' | 'secondary' | 'tertiary' | 'background' >


const blue = "#0064ff";
const lightBlue = "#66a3ff";
const darkBlue = "#0047b2";
const background = "#f0f8ff";
const surface = "#ffffff";
const error = "#ff0044";
const onBackground = "#000000";
const onSurface = "#000000";

export const pallete = {
  primary: blue,
  onPrimary: "#ffffff",
  primaryContainer: lightBlue,
  onPrimaryContainer: "#003399",
  secondary: darkBlue,
  onSecondary: "#ffffff",
  secondaryContainer: lightBlue,
  onSecondaryContainer: "#003399",
  background: background,
  onBackground: onBackground,
  surface: surface,
  onSurface: onSurface,
  error: error,
  onError: "#ffffff",
  surfaceVariant: lightBlue,
  onSurfaceVariant: "#003399",
  outline: darkBlue,
};

export const themeConfig = {
  ...MD3LightTheme, // ou MD3DarkTheme se preferir um tema escuro
  colors: {
    ...MD3LightTheme.colors, // ou MD3DarkTheme.colors
    ...pallete
  },
};
