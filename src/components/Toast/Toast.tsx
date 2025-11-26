import { useCallback, useEffect, useMemo, useRef } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useToastStore } from "../../store/useToastStore";
import { Text } from "react-native";
import { Colors } from "../../global/Colors";
import styles from './Toast.styles';
import { scheduleOnRN } from "react-native-worklets";

export default function Toast() {
  const { onHide, showToast, toastMessage, toastType } = useToastStore((state) => ({
    showToast: state.showToast,
    toastMessage: state.toastMessage,
    toastType: state.toastType,
    onHide: state.onHide
  }));

  const offset = useSharedValue(100);
  const hasShownRef = useRef(false);

  const onHideToast = useCallback(() => {
    offset.value = withTiming(100, { duration: 300 }, () => {
      scheduleOnRN(() => {
        hasShownRef.current = false;
        onHide();
      });
    })
  }, [offset, onHide])

  const animatedStyled = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: offset.value,
      }
    ]
  }))

  useEffect(() => {
    if ((showToast) && !hasShownRef.current) {
      hasShownRef.current = true;

      offset.value = withTiming(0, { duration: 300 });

      const timeout = setTimeout(() => {
        onHideToast();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showToast, onHideToast]);

  if (!showToast) {
    return null;
  }

  const backgroundColor = useMemo(() => ({
    success: Colors.SUCCESS,
    error: Colors.ERROR,
    warning: Colors.WARNING,
    info: Colors.INFO,
  }[toastType ?? 'info']), [toastType]);

  return (
    <Animated.View
      style={[
        animatedStyled,
        styles.toastContainer,
        {
          backgroundColor,
        }
      ]}
    >
      <Text style={styles.toastText}>
        {toastMessage}
      </Text>
    </Animated.View>
  )
}