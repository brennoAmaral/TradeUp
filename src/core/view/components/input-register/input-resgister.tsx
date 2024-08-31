import { darkTheme } from "@/theme/theme-config";
import useTheme from "@/theme/use-theme";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import inputRegisterStyle from "./input-register-style";
import { InputRegisterParams } from "./input-register-type";


export default function InputRegister<fields extends FieldValues>({  form, nameField, placeHolder, secureTextEntry=false, iconLeft, iconRight, readonly = false }: InputRegisterParams<fields>) {
  const { colors } = useTheme()
  const errors = form.formState.errors
  const errorMessage = errors?.[nameField]?.message ? errors?.[nameField]?.message : undefined
  const borderColor = errorMessage ? darkTheme.colors.error : darkTheme.colors.primary
  const { container, input, inputContainer } = inputRegisterStyle

  return (
    <Controller
      name={nameField}
      control={form.control as Control<fields>}
      rules={{
        maxLength: 100,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={container}>
          {/* <Text style={{...inputRegisterStyle.label, color: controlColorsOnErrors()}}>{label}</Text> */}
          <View style={{...inputContainer, backgroundColor: colors.backgroud, borderWidth: 1, borderColor: errorMessage ? colors.error : colors.divider}}>
            <TextInput
              style={{...input, color: colors.text}}
              placeholderTextColor={`${colors.text}30`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              selectionColor='#000000'
              readOnly={readonly}
              placeholder={placeHolder}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {errorMessage && <Text style={{ color: borderColor, fontWeight: 'bold' }}>{errorMessage as string}</Text>}
        </View>



      )} />
  );
}