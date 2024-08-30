import { Button } from "react-native-paper";
import Screen from "../../components/screen/screen";
import { lightTheme } from "../../theme/theme-config";

export default function LoginPage() {
  return (
    <Screen>
      <Button mode="contained" textColor={lightTheme.colors.background} onPress={() => console.log('teste')}>
        teste
      </Button>
    </Screen>
  );
}
