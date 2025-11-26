module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native' +
      '|react-native-reanimated' +
      '|react-native-gesture-handler' +
      '|react-native-worklets-core' +
      '|@react-native' +
      ')/)',
  ],
};