import usePageController from "@/hooks/components/use-page-controller";
import useTheme from "@/theme/use-theme";
import { TouchableOpacity, View } from "react-native";
import Card from "../card/card";
import SvgArrowLeft from "../svgs/arrow-left-svg";
import SvgArrowRight from "../svgs/arrow-right-svg";
import TextTheme from "../text/text";
import pageControllerStyle from "./page-controller-style";
import PageControllerParams from "./page-controller-type";

export default function PageController({ currentPage, lastPage, changePage }: PageControllerParams) {
  if (!lastPage || !currentPage) {
    return null;
  }

  const {page,pages,changePageAndFetch} = usePageController(currentPage, lastPage, changePage)
  const {colors, fonts} = useTheme()
  const {card, containerPaginator} = pageControllerStyle

  return (
    <View style={containerPaginator}>
      {page > 1 && (
        <TouchableOpacity onPress={() => changePageAndFetch(page - 1)}>
          <SvgArrowLeft/>
        </TouchableOpacity>
      )}

      {pages.map((mapPage, index) => {
        const isCurrentPage = page === mapPage;
        return (
          <TouchableOpacity onPress={() => changePageAndFetch(mapPage)} key={index}>
            <Card style={{
              ...card,
              backgroundColor: isCurrentPage ? `${colors.primary}10` : 'transparent',
              borderColor: isCurrentPage ? colors.primary : 'transparent'
            }}>
              <TextTheme style={{
                color: isCurrentPage ? colors.primary : colors.text,
                fontSize: fonts.bodyLarge.fontSize
              }}>
                {`${mapPage}`}
              </TextTheme>
            </Card>
          </TouchableOpacity>
        );
      })}

      {page < lastPage && (
        <TouchableOpacity onPress={() => changePageAndFetch(page + 1)}>
          <SvgArrowRight/>
        </TouchableOpacity>
      )}
    </View>
  );
}
