import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 25,
  },
  pageFull: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  pageHeight: {
    flex: 1,
    marginVertical: 5,
  },
  text: {
    textAlign: "left",
  },
  input: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  search: {
    marginVertical: 10,
    flexDirection: "row-reverse",
    paddingRight: 15,
    borderRadius: 5,
  },
  button: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
  },
});
