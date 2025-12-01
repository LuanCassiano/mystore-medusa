module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native' +
      '|react-native-reanimated' +
      '|react-native-gesture-handler' +
      '|react-native-worklets-core' +
      '|@expo/vector-icons' +
      '|@react-native' +
      ')/)',
  ],
  moduleNameMapper: {
    '^@expo/vector-icons$': '<rootDir>/jest/__mocks__/@expo/vector-icons.js',
  },
};