import InputRegister from "@/components/input-register/input-resgister";
import { DTOAuthenticateParams } from "@/DTO/auth/DTO-authenticate";
import useLoginPage from "@/hooks/pages/use-login-page";
import useTheme from "@/theme/use-theme";
import { useRouter } from "expo-router";
import { Button, Image, View } from "react-native";
export default function LoginPage() {
  const router = useRouter()
  const {
    form,
    onSubmit
  } = useLoginPage(router)
  const theme = useTheme()
  // useEffect(()=>{
  //   async function checkToken(){
  //     const token = await getItem('API_TOKEN_TRADE_UP')
  //     if(!token)return
  //     router.push('/Home')
  //   }

  //   setTimeout(() => {
  //     checkToken();
  //   }, 1000);
  // },[])
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: theme.colors.backgroud
    }}>
      <View style={{
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        gap: 35
      }}>
        
          <Image
            source={require('@/assets/images/banner.png')}
            style={{ height: 175, width: 175, borderRadius: 20 }}
          />
        <InputRegister<DTOAuthenticateParams>
          form={form}
          nameField="email"
          placeHolder="e-mail"
        />
        <InputRegister<DTOAuthenticateParams>
          form={form}
          nameField="password"
          placeHolder="senha"
          secureTextEntry
        />
        <Button onPress={form.handleSubmit(onSubmit)} disabled={!form.formState.isValid} title="Login"/>
      </View>
    </View>
  );
}
