import { ListRenderItem } from "react-native";

export type ListProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  horizontal?: boolean;
}