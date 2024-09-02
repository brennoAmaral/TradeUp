import { StyleSheet } from "react-native";

const pageControllerStyle = StyleSheet.create({
  containerPaginator:{
    width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  card:{
    height: 35,
    width: 35,
    padding: 0,
    marginHorizontal: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
  }
})

export default pageControllerStyle