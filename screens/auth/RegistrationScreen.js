import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const navigation = useNavigation();

  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -140 : -130}
          >
            <View
              style={{
                ...styles.form,
                width: dimensions,
              }}
            >
              <View style={styles.imgAvatar}></View>
              <Text style={styles.title}>Реєстрація</Text>

              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  placeholder={"Логін"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder={"Адреса електронної пошти"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View
                style={{
                  marginTop: 16,
                  position: "relative",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder={"Пароль"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <Text style={styles.showPassword}>Показати</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зареєстуватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginTop: 16,
                  alignSelf: "center",
                }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.link}>
                  Вже є акаунт?
                  <Text style={styles.link}> Увійти</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
    marginBottom: 0,
  },
  imgAvatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
  },
  title: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Medium",
    marginTop: 92,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
    fontFamily: "Regular",
    marginHorizontal: 16,
    padding: 16,
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  wrapPassword: {
    marginTop: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showPassword: {
    position: "absolute",
    right: 32,
    bottom: 16,
    fontFamily: "Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  btn: {
    borderRadius: 100,
    height: 51,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Regular",
  },

  link: {
    color: "#1B4371",
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 45,
  },
});
