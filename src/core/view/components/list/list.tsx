import useTheme from "@/theme/use-theme";
import { FlatList, View } from "react-native";
import Card from "../card/card";
import PageController from "../pagination/page-controller";
import Spinner from "../spinner/spinner";
import TextTheme from "../text/text";
import listStyle from "./list-style";
import { ListParams } from "./list-type";

export default function ListWithPaginate<data extends { id: number }>({ Body, Header, changePage, data, currentPage, lastPage, isFetching }: ListParams<data>) {
  const canRenderContent = !isFetching || !data
  const { colors } = useTheme()
  const { textError, viewError } = listStyle
  
  const BodyList = () => {
    if (!data) {
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
    }
    return (<FlatList<data>
      nestedScrollEnabled
      data={data}
      keyExtractor={(item) => `${item!.id}`}
      renderItem={({ item, index, separators }) => <Body item={item} index={index + 1} separators={separators} />}
    />)
  }

  const AnimatedLoading = () => (
    <View style={{ paddingVertical: 60 }}>
      <Spinner color={colors.primary} size={60} />
    </View>
  )

  return (
    <View>
        <Header />
        {
          isFetching ?
            <AnimatedLoading />
            : <BodyList />
        }
      {
        canRenderContent && <PageController {...{ changePage, currentPage, lastPage }} />
      }
    </View>
  )
}