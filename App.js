import React from "react";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <LoginScreen /> */}
      {/* <RegistrationScreen /> */}
      <PostsScreen />
    </>
  );
}
