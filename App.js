import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { useFonts } from "expo-font";

export default function App() {
  const routing = useRoute(true);
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Roboto-Regular.ttf"), //400
    Medium: require("./assets/fonts/Roboto-Medium.ttf"), //500
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
    </>
  );
}
