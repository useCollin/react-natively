// https://github.com/expo/expo-cli/tree/main/packages/next-adapter#transpilation
// recommended babel config for next.js with swc
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
