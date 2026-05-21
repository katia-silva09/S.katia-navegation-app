import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import "./global.css";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Slot />;
};

export default RootLayout;