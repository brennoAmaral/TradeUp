import Card from "@/components/card/card";
import PageController from "@/components/pagination/page-controller";
import Screen from "@/components/Screen/screen";
import Spinner from "@/components/spinner/spinner";
import TextTheme from "@/components/text/text";
import { UserEntity } from "@/entities/users/user-entity";
import useUsersPage from "@/hooks/pages/use-users-page";
import useTheme from "@/theme/use-theme";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import usersPageStyle from "./users-page-style";

interface RenderItem extends UserEntity {
  index: number,
}

export default function UsersPage() {
  const { query, setPage, isFetchingOrError } = useUsersPage()
  const { colors, fonts } = useTheme()
  const { image, templateTable, textError, viewError } = usersPageStyle
  const RenderItem = ({ avatar, email, first_name, id, last_name, index }: RenderItem) => {
    return (
      <TouchableOpacity>
        <View style={{
          ...templateTable,
          borderBottomColor: colors.divider,
          borderBottomWidth: index === query.data?.data.length ? 0 : 2
        }}>
          <Image source={{ uri: avatar }} style={image} />
          <View style={{ flexBasis: '20%' }}>
            <TextTheme >
              {first_name}
            </TextTheme>
            <TextTheme >
              {last_name}
            </TextTheme>
          </View>
          <TextTheme style={{ flexBasis: '60%' }} >
            {email}
          </TextTheme>
        </View>
      </TouchableOpacity>
    )
  }

  const Header = () => (
    <View style={{
      ...templateTable,
      borderColor: colors.primary,
      borderBottomWidth: 2,
    }}>
      <TextTheme style={{ flexBasis: '20%', fontSize: fonts.bodyLarge.fontSize, color: colors.primary }} isBold>
        Avatar
      </TextTheme>
      <TextTheme style={{ flexBasis: '20%', fontSize: fonts.bodyLarge.fontSize, color: colors.primary }} isBold>
        Nome
      </TextTheme>
      <TextTheme style={{ flexBasis: '60%', fontSize: fonts.bodyLarge.fontSize, color: colors.primary }} isBold>
        E-mail
      </TextTheme>
    </View>
  )
  const List = () => {
    if (!query.data?.data) {
      return (
        <Card borderColor={colors.error} backgroundColor={`${colors.error}10`}>
          <View style={viewError}>
            <TextTheme style={
              {
                ...textError,
                color: colors.error,
              }
            }>
              Usuários não encontrados
            </TextTheme>
          </View>
        </Card>
      )
    }
    return (<FlatList
      nestedScrollEnabled
      data={query.data?.data}
      keyExtractor={(user) => `${user.id}`}
      renderItem={({ item, index }) => <RenderItem {...item} index={index + 1} />}
    />)
  }
  const AnimatedLoading = () => (<View style={{ paddingVertical: 60 }}>
    <Spinner color={colors.primary} size={60} />
  </View>)
  return (
    <Screen>
      <View>
        <Header />
        {
          query.isFetching ? 
          <AnimatedLoading /> 
          : <List />
        }
      </View>
      {
        isFetchingOrError && <PageController {...{
          changePage: (page: number) => setPage(page), currentPage: query.data?.page, lastPage: query.data?.total_pages
        }} />
      }

    </Screen>
  );
} 