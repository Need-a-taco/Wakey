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
  TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";

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
    paddingTop: 10,
    paddingBottom: 10,
    width: "60%",
    backgroundColor: "#4A5358",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    height: 47,
  },
  text: {
    color: "#f0f3f7",
    fontSize: 18,
    fontWeight: "bold",
  },
});

const SoundBoard = () => {
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
          <SoundButton buttonType={"trumpet"} />
          <SoundButton buttonType={"siren"} />
        </View>
        <View style={styles.buttonContainer}>
          <SoundButton buttonType={"bruh"} />
          <SoundButton buttonType={"fart"} />
        </View>
      </View>
      <View style={styles.button}>
        <Link href="/" asChild style={{ marginTop: "20%" }}>
          <TouchableWithoutFeedback style={styles.button}>
            <Text style={styles.text}>Wakey Over</Text>
          </TouchableWithoutFeedback>
        </Link>
      </View>
    </SafeAreaView>
  );
};
export default SoundBoard;
