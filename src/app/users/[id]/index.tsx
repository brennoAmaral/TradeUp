import Card from "@/components/card/card";
import Screen from "@/components/Screen/screen";
import TextTheme from "@/components/text/text";
import { UserEntity } from "@/entities/users/user-entity";
import useTheme from "@/theme/use-theme";
import { useLocalSearchParams } from "expo-router";
import { Image, TextStyle, View, ViewStyle } from "react-native";
import usersDetailStyle from "./user-detail-style";

export default function UsersDetails({ }) {
  const { id, avatar, email, first_name, last_name } = useLocalSearchParams() as unknown as UserEntity;
  const { colors, fonts } = useTheme()
  const { primary } = colors
  const { bodyLarge, headlineSmall } = fonts
  const { image, containerImage } = usersDetailStyle
  const cardStyle: ViewStyle = { borderColor: primary, borderWidth: 2, marginTop: 5 }
  const valueStyle: TextStyle = { fontSize: headlineSmall.fontSize, fontWeight: 'bold'}
  const labelStyle: TextStyle = { fontSize: bodyLarge.fontSize, color: primary }

  const Field = ({ label, value }: { label: string, value: string }) => (
    <View>
      <TextTheme style={labelStyle}>
        {label}
      </TextTheme>
      <Card style={cardStyle}>
        <TextTheme style={valueStyle}>
          {value}
        </TextTheme>
      </Card>
    </View>
  )

  return (
    <Screen>
      <View style={containerImage}>
        <Image source={{ uri: avatar }} style={{ ...image, borderColor: primary }} />
      </View>
      <View style={{gap: 20}}>

        <Field label="Nome" value={first_name} />
        <Field label="Sobrenome" value={last_name} />
        <Field label="E-mail" value={email} />
      </View>
    </Screen>
  );
}