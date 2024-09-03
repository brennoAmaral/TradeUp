import inputRegisterStyle from "@/components/input-register/input-register-style"
import { InputRegisterParams } from "@/components/input-register/input-register-type"
import useTheme from "@/theme/use-theme"
import { FieldValues } from "react-hook-form"


export default function useInputRegister<fields extends FieldValues>({form, nameField}:Pick<InputRegisterParams<fields>, 'form' | 'nameField'>){

  const { colors } = useTheme()
  
  const errors = form.formState.errors
  
  const errorMessage = errors?.[nameField]?.message ?? undefined
  
  const borderColor = errorMessage ? colors.error : colors.primary

  const themedInputContainer = {...inputRegisterStyle.inputContainer, backgroundColor: colors.backgroud, borderWidth: 1, borderColor: errorMessage ? colors.error : colors.primary}
  
  return{
    colors,
    borderColor,
    themedInputContainer,
    errorMessage,
  }
}