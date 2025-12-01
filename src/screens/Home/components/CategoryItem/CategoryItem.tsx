import { Text, TouchableOpacity } from "react-native";
import { CategoryItemProps } from "./types/categoryItemProps";
import { styles } from "./CategoryItem.styles";

export default function CategoryItem ({
  item
}: CategoryItemProps) {
  return (
    <TouchableOpacity style={styles.categoryItemContainer}>
      <Text style={styles.cateogryItemTitle}>
        {item.name}
      </Text>
    </TouchableOpacity>
  )
}