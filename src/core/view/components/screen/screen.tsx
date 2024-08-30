import { View } from "react-native";

interface IScreen {
  children: React.ReactNode
}

export default function Screen({ children }: IScreen) {
  

  return <View >
    {children}
  </View>
}