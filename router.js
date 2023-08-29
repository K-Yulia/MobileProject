import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
// import Home from "./screens/mainScreens/Home";
import PostsScreen from "./screens/mainScreens/PostsScreen";
import CreateScreen from "./screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "./screens/mainScreens/ProfileScreen";
import { View } from "react-native";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          title: "Публікації",
          headerTitleStyle: {
            fontFamily: "Medium",
            fontWeight: 500,
            lineHeight: 22,
            letterSpacing: -0.4,
            fontSize: 17,
          },
          headerTitleAlign: "center",
          headerTintColor: "#212121",

          headerRight: ({ focused, color, size }) => (
            <Feather
              name="log-out"
              size={24}
              color={color}
              style={{ marginRight: 10 }}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="plus"
              size={13}
              color="#FFFFFF"
              style={{
                height: 40,
                width: 70,
                borderRadius: 20,
                backgroundColor: "#FF6C00",
                alignItems: "center",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            />
          ),
          title: "Створити публікацію",
          headerTitleStyle: {
            fontFamily: "Medium",
            fontWeight: 500,
            lineHeight: 22,
            letterSpacing: -0.4,
            fontSize: 17,
          },
          headerTitleAlign: "center",
          headerTintColor: "#212121",

          headerLeft: ({ focused, color, size }) => (
            <Feather
              name="arrow-left"
              size={24}
              color={color}
              style={{ marginLeft: 16 }}
            />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
