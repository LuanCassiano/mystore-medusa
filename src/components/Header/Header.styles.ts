import { StyleSheet } from "react-native";
import { Colors } from "../../global/Colors";
import { Fonts } from "../../global/Fonts";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.WHITE,
  },

  headerContent: {
    height: 56,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.BLACK,
  },

  headerDivider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    marginHorizontal: 20,
  }
});
