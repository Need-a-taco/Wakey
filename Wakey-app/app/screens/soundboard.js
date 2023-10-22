import { useState, useEffect, useRef } from "react";
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
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

import SoundButton from "../../components/soundboard/soundButtons";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#021629",
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
    //height: 60,
    alignContent: "center",
  },
  text: {
    color: "#dde6f0",
    fontSize: 23,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    padding: 5,
  },
  wakeyOver: {
    margin: 10,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    //height: "300px",
  },
});

const SoundBoard = () => {
  const params = useLocalSearchParams();
  const { code } = params;
  const colors = [
    "#dde6f0",
    "#cfdbe8",
    "#cfdbe8",
    "#97b0de",
    "#97b0de",
    "#dde6f0",
  ];
  // index of colors
  const colorIndex = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorIndex, {
        toValue: 5,
        duration: 5000,
        useNativeDriver: false,
      }),
      { iterations: -1 }
    ).start();
  }, []);
  // go through the colors
  const textColor = colorIndex.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5],
    outputRange: colors,
  });

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
        <TouchableWithoutFeedback>
          <Animated.Text style={[styles.bigText, { color: textColor }]}>
            Wake Up
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ marginTop: "10%", marginBottom: "10%" }}></View>
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
      <View style={styles.wakeyOver}>
        {/* <Link href="/" asChild> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.replace({ pathname: "/home" });
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
