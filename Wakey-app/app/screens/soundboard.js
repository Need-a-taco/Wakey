import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

import SoundButton from "../../components/soundboard/soundButtons";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#1d1e1f",
    flex: 1,
  },
  smallText: {
    color: "white",
    fontSize: 20,
  },
  timeText: {
    color: "white",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  bigText: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 120,
    width: "60%",
    backgroundColor: "#4A5358",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    height: 60,
  },
  text: {
    color: "#f0f3f7",
    fontSize: 23,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 18,
  },
});

const SoundBoard = () => {
  const params = useLocalSearchParams();
  const { code } = params;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "35%",
        }}
      >
        <Text style={styles.timeText}>It's time to</Text>
        <Text style={styles.bigText}>Wake Up</Text>
      </View>
      <View style={{ marginTop: "10%", marginBottom: "10%" }}>
        <Text style={styles.smallText}>Friend 1</Text>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <SoundButton buttonType={"trumpet"} alarmCode={code} />
          <SoundButton buttonType={"siren"} alarmCode={code} />
        </View>
        <View style={styles.buttonContainer}>
          <SoundButton buttonType={"bruh"} alarmCode={code} />
          <SoundButton buttonType={"fart"} alarmCode={code} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* <Link href="/" asChild> */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              router.replace({pathname: '/home'});
          }}
            >
            <Text style={styles.text}>Wakey Over</Text>
          </TouchableOpacity>
        {/* </Link> */}
      </View>
    </SafeAreaView>
  );
};
export default SoundBoard;
