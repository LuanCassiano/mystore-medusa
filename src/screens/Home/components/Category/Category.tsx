import { FlatList } from "react-native";
import { CategoryProps } from "./types/categoryProps";
import CategoryItem from "../CategoryItem/CategoryItem";
import { styles } from "./Category.styles";

export default function Category ({ 
  data
}: CategoryProps) {
  return (
    <FlatList
      data={data || []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerCategory}
    />
  )
}