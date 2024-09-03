
export default interface ButtonParams{
  onPress: ()=>void
  disabled?:boolean
  title: React.ReactNode
  isLoading?: boolean
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
}