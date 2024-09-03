import useTheme from "@/theme/use-theme";
import { Text, TextStyle } from "react-native";

interface TextThemedParams extends Partial<Text>{
  style?: TextStyle
  isBold?: boolean
  children: string
}

export default function TextTheme(params: TextThemedParams){
  const {isBold, style} = params
  const {colors, fonts} = useTheme()
  
  return(
    <Text {...params} style={{color:colors.text, fontSize: fonts.bodyMedium.fontSize, fontWeight: `${isBold?'bold':'normal'}`, ...style}} >
      {params.children}
    </Text>
  )
}