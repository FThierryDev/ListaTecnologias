import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  header: {
    paddingHorizontal: 24,
    paddingTop: 75,
    backgroundColor: "black",
  },

  title: {
    textAlign: "center",
    fontWeight: "900",
    color: "#4EA8DE",
    fontSize: 20,
    lineHeight: 24.2,
  },

  containerRegisterTech: {
    paddingHorizontal: 24,
    paddingTop: 92,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    height: 75,
    backgroundColor: "black",
  },

  content: {
    paddingHorizontal: 24,
  },

  finished: {
    fontWeight: "bold",
    color: "#8284FA",
  },

  count: {
    backgroundColor: "#333333",
    color: "white",
    width: 25,
    height: 19,
    marginLeft: 8,
    fontSize: 13,
    textAlign: "center",
    borderRadius: 10,
  },

  situation: {
    marginTop: 50,
    alignItems: "center",
    width: 348,
    height: 22,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  situationText: {
    display: "flex",
    flexDirection: "row",
  },

  created: {
    fontWeight: "bold",
    color: "#4EA8DE",
  },

  subTitleListTech: {
    color: "#FDFCFE",
    fontSize: 14,
    fontWeight: "bold",
  },

  containerListTech: {
    alignItems: "center",
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

  scorollList: {
    height: 450,
  },

  listEmpty: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 68,
  },

  textlistEmpty: {
    color: "#808080",
  },

  line: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
});
