import { StyleSheet } from "react-native";

const usersPageStyle = StyleSheet.create({
  templateTable: {
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 500,
    marginRight: 10,
  },
});

export default usersPageStyle
