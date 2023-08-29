import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// import {  } from "react-native-gesture-handler";

export default function CreatePostsScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [place, setPlace] = useState("");
  const [nameLocation, setNameLocation] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("location", location);
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      console.log("latitude", location.coords.latitude);
      console.log("longitude", location.coords.longitude);
      setLocation(coords);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    await MediaLibrary.createAssetAsync(photo.uri);
    setPhoto(photo.uri);
    // console.log("photo", camera.takePictureAsync());
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("Home", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 150, width: 150, borderRadius: 10 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <MaterialIcons name="camera-alt" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </Camera>
      <View style={{ marginTop: 8 }}>
        {photo !== "" ? (
          <Text style={styles.titleLoad}>Редагувати фото</Text>
        ) : (
          <Text style={styles.titleLoad}>Завантажте фото</Text>
        )}
      </View>
      <View style={{ marginTop: 32 }}>
        <TextInput
          value={place}
          onChangeText={(value) => setPlace(value)}
          style={styles.input}
          placeholder={"Назва..."}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          value={nameLocation}
          onChangeText={(value) => setNameLocation(value)}
          style={styles.inputLocation}
          placeholder={"Місцевість..."}
        />
        <Feather name="map-pin" size={24} color="#BDBDBD" style={styles.map} />
      </View>
      <View>
        <TouchableOpacity
          onPress={sendPhoto}
          style={{
            ...styles.sendBtn,
            backgroundColor:
              photo !== "" && place !== "" && nameLocation !== ""
                ? "#FF6C00"
                : "#F6F6F6",
          }}
        >
          <Text
            style={{
              ...styles.sendLabel,
              color:
                photo !== "" && place !== "" && nameLocation !== ""
                  ? "#FFFFFF"
                  : "#BDBDBD",
            }}
          >
            SEND
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.deleteBtn}>
            <Feather name="trash-2" size={24} color="#DADADA" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  camera: {
    height: 240,
    marginTop: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleLoad: {
    fontFamily: "Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  snapContainer: {
    backgroundColor: "#FFFFFF4D",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    color: "#212121",
    fontSize: 16,
    fontFamily: "Medium",
    lineHeight: 18.75,
    paddingVertical: 16,
  },
  inputLocation: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    color: "#212121",
    fontSize: 16,
    fontFamily: "Regular",
    lineHeight: 18.75,
    paddingVertical: 16,
    paddingLeft: 28,
  },
  map: {
    position: "absolute",
    top: 10,
  },
  sendBtn: {
    borderRadius: 100,
    // backgroundColor: "#F6F6F6",
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    // color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Regular",
    lineHeight: 18.75,
    paddingVertical: 16,
  },
  deleteBtn: {
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginTop: 40,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
