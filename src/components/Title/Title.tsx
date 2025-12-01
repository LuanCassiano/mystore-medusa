import { Text } from "react-native";
import { TitleProps } from "./types/titleProps";
import { getTitleStyle } from "./Title.styles";
import { Colors } from "../../global/Colors";
import { Fonts } from "../../global/Fonts";

export default function Title ({
  textColor = Colors.BLACK,
  textSize = 16,
  font = Fonts.regular,
  title = 'Default Title',
}: TitleProps) {
  return (
    <Text
      style={getTitleStyle(textColor, textSize, font)}
      testID="title-component"
    >
        {title}
    </Text>
  )
}