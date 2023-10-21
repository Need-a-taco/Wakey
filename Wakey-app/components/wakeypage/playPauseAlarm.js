import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Audio } from "expo-av";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    marginTop: "55%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    width: "72%",
    backgroundColor: "#4A5358",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
  },
  text: {
    color: "#C3C3C3",

    fontWeight: "bold",
    fontSize: 20,
  },
});

const PlayPauseAlarm = () => {
  const [onLoadText, setText] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const onScreenLoad = () => {
    setText("");
    playAlarm();
  };
  useEffect(() => {
    onScreenLoad();
  }, []);

  const [sound, setSound] = useState();

  async function playAlarm() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarmSFX/AlarmOne.wav")
    );
    setSound(sound);

    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
    //await sound.unloadAsync();
  }
  async function stopAlarm() {
    await sound.unloadAsync();
    setSound(undefined);
    setInitialLoad(false);
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{onLoadText}</Text>
      </TouchableOpacity>
      {initialLoad ? (
        <TouchableOpacity onPress={stopAlarm} style={styles.button}>
          <Text style={styles.text}>I'm Awake</Text>
        </TouchableOpacity>
      ) : (
        <Link href="screens/soundboard" asChild>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setInitialLoad(false)}
          >
            <Text style={styles.text}>Wake Up Friends</Text>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};
export default PlayPauseAlarm;
