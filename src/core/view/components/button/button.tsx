import useTheme from "@/theme/use-theme";
import { Text, TouchableOpacity } from "react-native";
import Spinner from "../spinner/spinner";
import buttonStyle from "./button-style";
import ButtonParams from "./button-type";

export default function Button({title,onPress, iconLeft, iconRight, isLoading = false, disabled=false}: ButtonParams) {
  
  const { touchable, text } = buttonStyle
  const {colors} = useTheme()
  const styleTouchable = {...touchable, backgroundColor: disabled ? colors.divider : colors.primary }
  const styleText = {...text, color: disabled ? '#8a8a8a' : '#FFF' }

  if(isLoading){
    return(
    <TouchableOpacity style={styleTouchable} disabled={disabled}>
      <Spinner color={'#fff'} size={22}/>
    </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity style={styleTouchable}  onPress={onPress} disabled={disabled}>
      {iconLeft}
      <Text
        style={
          styleText
        }
      >
        {title}
      </Text>
      {iconRight}
    </TouchableOpacity>
  );
}