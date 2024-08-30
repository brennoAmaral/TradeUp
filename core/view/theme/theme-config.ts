import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const blue = '#3190e8';
const lightBlue = '#66a9f0';
const darkBlue = '#256bb4';
const darkBackground = '#121212';
const lightBackground = '#f0f8ff';
const darkSurface = '#1e1e1e';
const lightSurface = '#ffffff';
const error = '#b00020';
const onError = '#ffffff';

const fonts = {
  ...MD3LightTheme.fonts,
    bodyLarge: {
      ...MD3LightTheme.fonts.bodyLarge,
      fontSize: 12, // Ajuste para aumentar o tamanho do texto
    },
    bodyMedium: {
      ...MD3LightTheme.fonts.bodyMedium,
      fontSize: 16,
    },
    bodySmall: {
      ...MD3LightTheme.fonts.bodySmall,
      fontSize: 14,
    },
    headlineLarge: {
      ...MD3LightTheme.fonts.headlineLarge,
      fontSize: 34,
    },
    headlineMedium: {
      ...MD3LightTheme.fonts.headlineMedium,
      fontSize: 28,
    },
    headlineSmall: {
      ...MD3LightTheme.fonts.headlineSmall,
      fontSize: 24,
    },
    labelLarge: {
      ...MD3LightTheme.fonts.labelLarge,
      fontSize: 20,
    },
    labelMedium: {
      ...MD3LightTheme.fonts.labelMedium,
      fontSize: 18,
    },
    labelSmall: {
      ...MD3LightTheme.fonts.labelSmall,
      fontSize: 16,
    },
  // Continue ajustando outros estilos tipográficos conforme necessário
}
// Tema claro
export const lightTheme = {
  ...MD3LightTheme,
  fonts,
  colors: {
    ...MD3LightTheme.colors,
    primary: blue,
    onPrimary: '#ffffff',
    primaryContainer: lightBlue,
    onPrimaryContainer: '#002966',
    secondary: darkBlue,
    onSecondary: '#ffffff',
    secondaryContainer: lightBlue,
    onSecondaryContainer: '#002966',
    background: lightBackground,
    onBackground: '#000000',
    surface: lightSurface,
    onSurface: '#000000',
    error: error,
    onError: onError,
    surfaceVariant: lightBlue,
    onSurfaceVariant: '#002966',
    outline: darkBlue,
  },
};


export const darkTheme = {
  ...MD3DarkTheme,
  fonts,
  colors: {
    ...MD3DarkTheme.colors,
    primary: blue,
    onPrimary: '#000000',
    primaryContainer: darkBlue,
    onPrimaryContainer: '#66a9f0',
    secondary: lightBlue,
    onSecondary: '#000000',
    secondaryContainer: darkBlue,
    onSecondaryContainer: '#66a9f0',
    background: darkBackground,
    onBackground: '#ffffff',
    surface: darkSurface,
    onSurface: '#ffffff',
    error: error,
    onError: onError,
    surfaceVariant: darkBlue,
    onSurfaceVariant: '#66a9f0',
    outline: lightBlue,
  },
};

