import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Home({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        {/* <Image style={styles.imgAvatar}></Image> */}
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
          </View>
        )}
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Feather name="message-circle" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
        </TouchableOpacity>
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
    textAlign: "left",
  },
  userEmail: {
    fontFamily: "Regular",
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 13,
    textAlign: "left",
    color: "rgba(33, 33, 33, 0.8)",
  },
});
