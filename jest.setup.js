jest.mock('react-native-reanimated', () => {
  const Animated = {
    View: 'Animated.View',
  };

  return {
    __esModule: true,
    default: Animated,

    // Hooks
    useSharedValue: (initial) => ({ value: initial }),
    useAnimatedStyle: (fn) => fn(),
    withTiming: (toValue, config, cb) => {
      if (cb) cb();
      return toValue;
    },

    // Helpers usados internamente
    Easing: {
      linear: jest.fn(),
    },

    // zero crash
    runOnJS: (fn) => fn,
  };
});

global.__reanimatedWorkletInit = () => {};

jest.mock("react-native-worklets", () => ({
  scheduleOnRN: jest.fn(fn => fn()),
  createSerializable: jest.fn(value => value),
  version: "0.6.1",
}));