import ListWithPaginate from "@/components/list/list";
import Screen from "@/components/Screen/screen";
import TextTheme from "@/components/text/text";
import { UserEntity } from "@/entities/users/user-entity";
import useUsersPage from "@/hooks/pages/use-users-page";
import useTheme from "@/theme/use-theme";
import { Image, ListRenderItemInfo, TouchableOpacity, View } from "react-native";
import usersPageStyle from "./users-page-style";

interface RenderItem extends UserEntity {
  index: number,
}

export default function UsersPage() {
  const { query, setPage } = useUsersPage()
  const { colors, fonts } = useTheme()
  const { image, templateTable} = usersPageStyle

  const RenderItem = ({ item, index}:ListRenderItemInfo<UserEntity>) => {
    return (
      <TouchableOpacity>
        <View style={{
          ...templateTable,
          borderBottomColor: colors.divider,
          borderBottomWidth: index === query.data?.data.length ? 0 : 2
        }}>
          <Image source={{ uri: item.avatar }} style={image} />
          <View style={{ flexBasis: '20%' }}>
            <TextTheme >
              {item.first_name}
            </TextTheme>
            <TextTheme >
              {item.last_name}
            </TextTheme>
          </View>
          <TextTheme style={{ flexBasis: '60%' }} >
            {item.email}
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

  return (
    <Screen>

      <ListWithPaginate<UserEntity> 
        Body={RenderItem} 
        Header={Header} 
        changePage={(page: number) => setPage(page)} 
        isFetching={query.isFetching} 
        currentPage={query.data?.page}
        lastPage={query.data?.total_pages}
        data={query.data?.data} 
        />

    </Screen>
  );
} 