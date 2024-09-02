import { StyleProp, ViewStyle } from "react-native";

export default interface  ScreenParams{
  children: React.ReactNode,
  isScroll?: boolean,
  style?: Partial<StyleProp<ViewStyle>>
}