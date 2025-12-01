import { Text, View } from "react-native";
import { SectionProps } from "./types/sectionProps";
import { styles } from "./Section.styles";

export default function Section({
  sectionTitle,
  sectionSubtitle,
  children
}: SectionProps) {
  return (
    <View style={styles.sectionContiner}>
      <View style={styles.sectionContent}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>

        {sectionSubtitle && (
          <Text style={styles.sectionSubtitle}>{sectionSubtitle}</Text>
        )}
      </View>
      {children}
    </View>
  )
}