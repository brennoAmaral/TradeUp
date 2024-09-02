import useTheme from "@/theme/use-theme";
import { View } from "react-native";
import cardStyle from "./card-style";
import CardParams from "./card-type";


export default function Card({ children, backgroundColor, borderColor, style}: CardParams) {
  const {colors} = useTheme()
  const {view} = cardStyle
  if(!borderColor){
    borderColor = colors.divider
  }
  return (
    <View style={{...view, ...{backgroundColor, borderColor}, ...style}}>
      {children}
    </View>
  );
}