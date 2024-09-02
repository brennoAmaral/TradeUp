
const blue = '#1448b0';
const opacityBlue = `${blue}30`
const darkBlue = '#073495';


const error = '#e34b4b';

const fonts = {
    bodyLarge: {
      fontSize: 18, 
    },
    bodyMedium: {
      fontSize: 16,
    },
    bodySmall: {
      fontSize: 14,
    },
    headlineLarge: {
      fontSize: 34,
    },
    headlineMedium: {
      fontSize: 28,
    },
    headlineSmall: {
      fontSize: 24,
    },
    labelLarge: {
      fontSize: 20,
    },
    labelMedium: {
      fontSize: 18,
    },
    labelSmall: {
      fontSize: 16,
    },
  // Continue ajustando outros estilos tipográficos conforme necessário
}
// Tema claro
export const lightTheme = {
  fonts,
  colors: {
    primary: blue,
    darkPrimary: darkBlue,
    divider: '#d7dbdf',
    opacityPrimary: opacityBlue,
    backgroud: "#fff",
    backgroundCard: '#e1e1e1',
    error: error,
    text: '#555'
  },
};


export const darkTheme = {
  fonts,
  colors: {
    primary: '#3191eb',
    darkPrimary: darkBlue,
    divider: '#313538',
    opacityPrimary: opacityBlue,
    backgroud: "#151718",
    backgroundCard: '#313538',
    error: error,
    text: '#ffffff'
  },
};

