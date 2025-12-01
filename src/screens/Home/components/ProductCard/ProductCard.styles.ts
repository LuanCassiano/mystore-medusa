import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/Colors";
import { Fonts } from "../../../../global/Fonts";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 15,
    marginBottom: 10,
  },

  cardMedia: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 5
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: Fonts.black,
    color: Colors.BLACK,
  },

  cardSubtitle: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.SECONDARY,
  }
});