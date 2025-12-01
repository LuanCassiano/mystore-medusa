import { StyleSheet } from "react-native";
import { Fonts } from "../../global/Fonts";
import { Colors } from "../../global/Colors";

export const styles = StyleSheet.create({
  sectionContiner: {
    marginBottom: 24,
  },

  sectionContent: {
    marginBottom: 5,
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: Colors.BLACK
  },

  sectionSubtitle: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.SECONDARY,
  }
});