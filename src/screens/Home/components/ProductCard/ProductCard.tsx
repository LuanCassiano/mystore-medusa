import { Image, Text, View } from "react-native";
import { ProductCardProps } from "./types/productCardProps";
import { styles } from "./ProductCard.styles";

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.cardMedia}
          testID="product-image"
        />
      </View>

      <View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>R$ {item.variants[0].calculated_price?.calculated_amount.toFixed(2) || 0}</Text>
      </View>
    </View>
  )
}