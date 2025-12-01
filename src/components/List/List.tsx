import { FlatList } from "react-native";
import { ListProps } from "./types/listProps";
import { styles } from "./List.styles";

export default function List<T>({
  data,
  keyExtractor,
  renderItem,
  horizontal = false,
}: ListProps<T>) {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.containerCategory}
    />
  )
}
