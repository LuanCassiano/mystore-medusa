import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { StackHeaderProps } from "@react-navigation/stack";

import { Octicons } from "@expo/vector-icons";

import { Colors } from "../../global/Colors";

import { styles } from "./Header.styles";

export default function Header({ navigation, route, options, back }: StackHeaderProps) {
  const insets = useSafeAreaInsets();

  const title = options?.title || route.name;
  const canGoBack = !!back;

  const rightIconNavigation: Record<string, string | null> = {
    Home: "Notification",
  };

  const navigateTo = rightIconNavigation[route.name] || null;

  return (
    <View style={[ styles.headerContainer, { paddingTop: insets.top }]}>
      <View style={styles.headerContent}>
        {canGoBack && (
          <TouchableOpacity onPress={() => navigation.goBack()} testID="back-button">
            <Octicons name="chevron-left" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
        )}

        <Text style={styles.headerTitle}>
          {title}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(navigateTo!)}
          testID="right-button"
        >
          <Octicons name="bell" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>

      {route.name !== "Home" && (
        <View style={styles.headerDivider} testID="header-divider"/>
      )}
    </View>
  );
}