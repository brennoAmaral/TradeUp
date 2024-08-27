import { Image, Text } from "react-native";
import ParallaxScrollView from "../../components/ParallaxScrollView";
import loginStyle from "./login-style";

export default function LoginPage() {
  const {reactLogo} = loginStyle
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/core/view/assets/images/partial-react-logo.png")}
          style={reactLogo}
        />
      }
    >
      <Text>testeeeee</Text>
    </ParallaxScrollView>
  );
}


