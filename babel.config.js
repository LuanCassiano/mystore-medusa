module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-worklets/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: "@env",
        path: ".env",
        safe: false,
        allowUndefined: true
      }
    ]
  ],
}