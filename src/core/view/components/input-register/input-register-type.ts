import { FieldValues, Path, UseFormReturn } from "react-hook-form"

export interface InputRegisterParams<fields extends FieldValues>{
  nameField: Path<fields>
  // label: string
  form: UseFormReturn<fields>
  secureTextEntry?: boolean
  placeHolder: string
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  readonly?: boolean
}