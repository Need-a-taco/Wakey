import { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Audio } from "expo-av";
import PlayPauseAlarm from "../../components/wakeypage/playPauseAlarm";
import { router } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021629",
  },
  wrapper: {
    marginTop: "60%",
    width: "100%",
    // aspectRatio: 1,
    borderColor: "white",
    //backgroundColor: "#E2E7F7",
    //borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 42,
    fontWeight: "bold",
    color: "red",
  },
});

const WakeyWakey = () => {
  const params = useLocalSearchParams();
  const { code } = params;
  // colors we have
  const colors = ["white", "red", "green", "green", "red", "white"];
  // index of colors
  const colorIndex = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorIndex, {
        toValue: 5,
        duration: 7000,
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
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback>
          <Animated.Text style={[styles.text, { color: textColor }]}>
            WAKEY WAKEY
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
      <PlayPauseAlarm myCode={code} />
    </View>
  );
};

export default WakeyWakey;
