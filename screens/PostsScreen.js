import {
  StyleSheet,
  Text,
  View,
  //   ImageBackground,
  //   TextInput,
  //   TouchableOpacity,
  //   Platform,
  //   KeyboardAvoidingView,
  //   Keyboard,
  //   TouchableWithoutFeedback,
  //   Dimensions,
} from "react-native";

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Публікації</Text>
      <View style={styles.user}>
        <Image style={styles.imgAvatar}></Image>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    // backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Medium",
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.4,
    // textAlign: center,
    fontSize: 17,
    color: "#212121",
  },
  imgAvatar: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  user: {},
  userName: {
    fontFamily: "Bold",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 15,
    color: "#212121",
    textAlign: left,
  },
  userEmail: {
    fontFamily: "Regular",
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 13,
    textAlign: left,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
