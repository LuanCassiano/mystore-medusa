jest.mock('react-native-reanimated', () => {
  const Animated = {
    View: 'Animated.View',
  };

  return {
    __esModule: true,
    default: Animated,

    useSharedValue: (initial) => ({ value: initial }),
    useAnimatedStyle: (fn) => fn(),
    withTiming: (toValue, config, cb) => {
      if (cb) cb();
      return toValue;
    },

    Easing: {
      linear: jest.fn(),
    },

    runOnJS: (fn) => fn,
  };
});

global.__reanimatedWorkletInit = () => {};

jest.mock("react-native-worklets", () => ({
  scheduleOnRN: jest.fn(fn => fn()),
  createSerializable: jest.fn(value => value),
  version: "0.6.1",
}));
