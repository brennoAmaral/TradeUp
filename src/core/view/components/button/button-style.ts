import { StyleSheet } from "react-native";

const buttonStyle = StyleSheet.create({
  touchable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 25,
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default buttonStyle;
