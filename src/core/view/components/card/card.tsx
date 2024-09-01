import { View } from "react-native";
import cardStyle from "./card-style";
import CardParams from "./card-type";


export default function Card({ children, backgroundColor, borderColor}: CardParams) {
  const {view} = cardStyle
  return (
    <View style={{...view, ...{backgroundColor, borderColor}}}>
      {children}
    </View>
  );
}