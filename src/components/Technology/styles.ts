import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    padding: 12,
    width: 327,
    minHeight: 64,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#333333",
  },

  containerText: {
    backgroundColor: "#262626",
    flex: 1,
    justifyContent: "center",
    height: 56,
    marginHorizontal: 5,
  },

  technologyName: {
    color: "#fff",
    fontSize: 14,
    width: "80%",
  },
});
