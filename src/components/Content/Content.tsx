import { View, ScrollView } from "react-native";
import { ContentProps } from "./types/contentProps";
import { styles } from "./Content.style";

export default function Content({ children, scroll = false}: ContentProps) {
  const Wrapper = scroll ? ScrollView : View;

  return (
    <Wrapper
      contentContainerStyle={scroll && styles.content}
      style={!scroll && styles.content}
      testID="content-wrapper"
    >
      {children}
    </Wrapper>
  )
}