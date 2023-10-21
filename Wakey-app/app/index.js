import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Clock from "../components/homepage/clock";
import { Stack, useRouter } from "expo-router";
import CustomCode from "../components/homepage/customCode";
import JoinCode from "../components/homepage/joinCode";
import SetAlarmBtn from "../components/homepage/setAlarmBtn";
import TimePicker from "../components/homepage/timePicker";
import { useState } from "react";

const styles = StyleSheet.create({
  buttonText: (buttonType, item) => ({
    color: buttonType === item ? "white" : "gray",
    fontSize: 15,
  }),
  buttonContainer: (buttonType, item) => ({
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    marginBottom: 30,
    borderColor: buttonType === item ? "white" : "#7e8691",
    //borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: buttonType === item ? "#4A5358" : null,
  }),
});
const Home = () => {
  const [currPage, setCurrPage] = useState("custom");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1d1e1f" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1d1e1f" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Clock />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => setCurrPage("custom")}
          style={styles.buttonContainer("custom", currPage)}
        >
          <Text style={styles.buttonText("custom", currPage)}>Custom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrPage("join")}
          style={styles.buttonContainer("join", currPage)}
        >
          <Text style={styles.buttonText("join", currPage)}>Join</Text>
        </TouchableOpacity>
      </View>
      {currPage == "custom" && (
        <View>
          <CustomCode />
          <TimePicker />
          <SetAlarmBtn name="Set" />
        </View>
      )}
      {currPage == "join" && (
        <View>
          <JoinCode />
          <SetAlarmBtn name="Join" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
