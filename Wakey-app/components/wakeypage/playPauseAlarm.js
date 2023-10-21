import React, { useState, useEffect, component } from "react";
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
import { SoundPlayer } from "react-native-sound";

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

class PlayPauseAlarm extends Component {
  constructor() {
    super();
    this.mSocket = SocketHandler.sharedInstance.getSocket();
    this.initialLoad = true;

    // Initialize sound player
    SoundPlayer.setCategory("Playback");
  }

  componentDidMount() {
    SocketHandler.sharedInstance.establishConnection();

    // Rings alarm
    this.alarm();

    // Checks for input from the server before playing sound
    this.mSocket.on("trumpet", () => this.playSound("trumpet"));
    this.mSocket.on("siren", () => this.playSound("siren"));
    this.mSocket.on("bruh", () => this.playSound("bruh"));
    this.mSocket.on("fart", () => this.playSound("fart"));
  }

  alarm() {
    const alarmSound = new Sound("AlarmOne.wav", Sound.MAIN_BUNDLE, (error) => {
      if (!error) {
        alarmSound.setNumberOfLoops(-1); // Infinite loop
        alarmSound.play();
      }
    });
  }

  // Play various sound effects
  playSound(audioName) {
    const soundEffect = new Sound(
      `${audioName}.wav`,
      Sound.MAIN_BUNDLE,
      (error) => {
        if (!error) {
          soundEffect.play();
        }
      }
    );
  }

  // Stops the alarm
  endAlarm() {
    if (alarmSound) {
      alarmSound.stop();
      alarmSound.release();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>hi</Text>
        </TouchableOpacity>
        {initialLoad ? (
          <TouchableOpacity
            onPress={() => this.endAlarm()}
            style={styles.button}
          >
            <Text style={styles.text}>I'm Awake</Text>
          </TouchableOpacity>
        ) : (
          <Link href="screens/soundboard" asChild>
            <TouchableOpacity
              style={styles.button}
              onPress={(this.initialLoad = false)}
            >
              <Text style={styles.text}>Wake Up Friends</Text>
            </TouchableOpacity>
          </Link>
        )}
      </View>
    );
  }
}
export default PlayPauseAlarm;
