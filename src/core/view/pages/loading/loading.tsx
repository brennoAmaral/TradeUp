import Screen from "@/components/Screen/screen";
import Spinner from "@/components/spinner/spinner";
import useTheme from "@/theme/use-theme";

export default function LoadingPage() {
  const {colors} = useTheme()
  return (
    <Screen style={
      {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
      }
    }>
      <Spinner color={colors.primary} size={50}/>
    </Screen>
  );
}