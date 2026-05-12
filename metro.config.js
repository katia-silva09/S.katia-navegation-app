const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname);
 
// Le decimos a Metro dónde está nuestro archivo CSS global
module.exports = withNativeWind(config, { input: './app/global.css' });