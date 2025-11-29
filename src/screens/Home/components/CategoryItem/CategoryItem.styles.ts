import { StyleSheet } from "react-native";
import { Colors } from "../../../../global/Colors";
import { Fonts } from "../../../../global/Fonts";

export const styles = StyleSheet.create({
  categoryItemContainer: {
    padding: 12,
    backgroundColor: Colors.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  cateogryItemTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: Colors.SECONDARY,  
  }
});
