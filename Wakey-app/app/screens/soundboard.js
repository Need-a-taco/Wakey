import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
  SafeAreaView
} from "react-native";
import SoundButton from "../../components/soundboard/soundButtons";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#1d1e1f",
    flex: 1
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
    fontSize: 55,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
  },
});

const SoundBoard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.timeText}>It's time to</Text>
        <Text style={styles.bigText}>Wake Up</Text>
      </View>
      <View>
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
    </SafeAreaView>
  );
};
export default SoundBoard;
