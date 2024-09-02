import Button from "@/components/button/button";
import Card from "@/components/card/card";
import InputRegister from "@/components/input-register/input-resgister";
import Screen from "@/components/Screen/screen";
import SvgEmail from "@/components/svgs/email-svg";
import SvgEye from "@/components/svgs/eye-svg";
import { DTOAuthenticateParams } from "@/DTO/auth/DTO-authenticate";
import useLoginPage from "@/hooks/pages/use-login-page";
import useTheme from "@/theme/use-theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
export default function LoginPage() {
  const router = useRouter()
  const {
    form,
    onSubmit,
    isLoading,
    failedMessage
  } = useLoginPage(router)
  const [isSecure, setIsSecure] = useState<boolean>(true)
  const theme = useTheme()

  
  return (
    <Screen>
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
          iconRight={<SvgEmail />}
        />
        <InputRegister<DTOAuthenticateParams>
          form={form}
          nameField="password"
          placeHolder="senha"
          iconRight={
            <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
              <SvgEye isSlash={isSecure} />
            </TouchableOpacity>
          }
          secureTextEntry={isSecure}
        />
        <Button onPress={form.handleSubmit(onSubmit)} disabled={!form.formState.isValid} title='Login' isLoading={isLoading} />
        {failedMessage && <Card borderColor={theme.colors.error} backgroundColor={`${theme.colors.error}10`}>
          <View style={
            {
              display: 'flex',
              width: '100%',
              justifyContent: 'center'
            }
          }>
            <Text style={
              {
                color: theme.colors.error,
                fontWeight: 'semibold',
                fontSize: 16,
              }
            }>
              {failedMessage}
            </Text>
          </View>
        </Card>}
      </View>
    </Screen>
  );
}
