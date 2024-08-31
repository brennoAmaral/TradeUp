import useInputRegister from "@/hooks/components/use-input-register";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import SvgEye from "../svgs/eye-svg";
import inputRegisterStyle from "./input-register-style";
import { InputRegisterParams } from "./input-register-type";


export default function InputRegister<fields extends FieldValues>({ form, nameField, placeHolder, iconLeft, iconRight, readonly = false, secureTextEntry = false, maxLength = 100, }: InputRegisterParams<fields>) {
  const { container, input } = inputRegisterStyle
  const { borderColor, colors, themedInputContainer, errorMessage, isSecure, setIsSecure } = useInputRegister({ form, nameField })

  return (
    <Controller
      name={nameField}
      control={form.control as Control<fields>}
      rules={{
        maxLength: 100,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={container}>
          <View style={themedInputContainer}>
            <TextInput
              style={{ ...input, color: colors.text }}
              placeholderTextColor={`${colors.text}50`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              selectionColor={colors.text}
              readOnly={readonly}
              placeholder={placeHolder}
              secureTextEntry={isSecure}
            />
            {secureTextEntry &&
              <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>

                <SvgEye isSlash={isSecure} />
              </TouchableOpacity>
            }
          </View>
          {errorMessage && <Text style={{ color: borderColor, fontWeight: 'bold' }}>{errorMessage as string}</Text>}
        </View>



      )} />
  );
}