import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import trumpet from "../../assets/alarmSFX/trumpet.wav";
import siren from "../../assets/alarmSFX/siren.wav";
import bruh from "../../assets/alarmSFX/bruh.wav";
import fart from "../../assets/alarmSFX/fart.wav";

const styles = StyleSheet.create({
  buttonText: (active) => ({
    color: "white",
    fontSize: 15,
  }),
  buttonContainer: (active) => ({
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    borderColor: active ? "white" : "#7e8691",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: active ? "#4A5358" : null,
  }),
});

const SoundButton = ({ buttonType }) => {
  const [active, setActive] = useState(false);

  let buttonText = "";
  var file = "";
  switch (buttonType) {
    case "trumpet":
      buttonText = "Trumpet";
      //file = "../../assets/alarmSFX/trumpet.wav";
      break;
    case "siren":
      buttonText = "Siren";
      //file = "../../assets/alarmSFX/siren.wav";
      break;
    case "bruh":
      buttonText = "Bruh";
      //file = "../../assets/alarmSFX/bruh.wav";
      break;
    case "fart":
      buttonText = "Fart";
      //file = "../../assets/alarmSFX/fart.wav";
      break;
    default:
      break;
  }

  const [sound, setSound] = useState();

  const playSound = () => {
    switch (buttonType) {
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

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      onPress={playSound}
      style={styles.buttonContainer(active)}
    >
      <Text style={styles.buttonText(active)}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SoundButton;
