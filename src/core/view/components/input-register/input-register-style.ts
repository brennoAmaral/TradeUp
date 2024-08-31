import { StyleSheet } from "react-native";


// const theme = useTheme()
const inputRegisterStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  icon: {
    width: 16,
    height: 16,
  },
})

export default inputRegisterStyle