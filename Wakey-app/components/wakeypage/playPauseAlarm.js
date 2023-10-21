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
import SocketHandler from "../socketHandler"; // Import your SocketHandler class

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
  const mSocket = SocketHandler.sharedInstance.getSocket();

  const onScreenLoad = () => {
    setText("");
    playAlarm();
    SocketHandler.sharedInstance.establishConnection();
    mSocket.on("trumpet", () => playSound("trumpet"));
    mSocket.on("siren", () => playSound("siren"));
    mSocket.on("bruh", () => playSound("bruh"));
    mSocket.on("fart", () => playSound("fart"));
  };
  useEffect(() => {
    onScreenLoad();
  }, []);

  const [sound, setSound] = useState();
  const playSound = (str) => {
    switch (str) {
      case "trumpet":
        playTrumpet();
        break;
      case "siren":
        playSiren();
        break;
      case "bruh":
        playBruh();
        break;
      case "fart":
        playFart();
        break;
      default:
        break;
    }
  };

  async function playTrumpet() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarmSFX/trumpet.wav")
    );
    setSound(sound);

    await sound.playAsync();
  }
  async function playSiren() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarmSFX/siren.wav")
    );
    setSound(sound);
    await sound.playAsync();
  }
  async function playBruh() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarmSFX/bruh.wav")
    );
    setSound(sound);

    await sound.playAsync();
  }
  async function playFart() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/alarmSFX/fart.wav")
    );
    setSound(sound);

    await sound.playAsync();
  }

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
