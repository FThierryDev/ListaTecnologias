import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 75,
    backgroundColor: "#131016",
  },

  title: {
    color: "#FDFCFE",
    fontSize: 34,
    fontWeight: "bold",
  },

  date: {
    color: "#6B6B6B",
    fontSize: 16,
    lineHeight: 16,
  },

  containerRegisterTech: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 44,
    marginBottom: 34,
  },

  subTitleListTech: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
  },

  containerListTech: {
    marginTop: 24,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    fontSize: 14,
    color: "#FDFCFE",
    padding: 12,
    borderRadius: 4,
  },

  listEmpty: {
    color: "#FDFCFE",
    fontSize: 20,
    textAlign: "center",
  },
});
