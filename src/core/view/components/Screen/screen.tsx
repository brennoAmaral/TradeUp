import useTheme from "@/theme/use-theme";
import { ScrollView, View } from "react-native";
import screenStyle from "./screen-style";
import ScreenParams from "./screen-type";

export default function Screen({ children, isScroll, style}: ScreenParams) {
  const { colors } = useTheme()
  const baseScreenStyle = {...screenStyle.baseTemplateScreen, backgroundColor: colors.backgroud, ...style}

  if (isScroll) {
    return (
      <ScrollView style={baseScreenStyle} nestedScrollEnabled={true}>
        {children}
      </ScrollView>
    )
  }
  return (
    <View style={baseScreenStyle}>
      {children}
    </View>
  );
}