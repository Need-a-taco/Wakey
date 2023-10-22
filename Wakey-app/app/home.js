import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Clock from "../components/homepage/clock";
import { Stack, useRouter } from "expo-router";
import CustomCode from "../components/homepage/customCode";
import JoinCode from "../components/homepage/joinCode";
import SetAlarmBtn from "../components/homepage/setAlarmBtn";
import TimePicker from "../components/homepage/timePicker";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

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
  // passed in from name screen
  const params = useLocalSearchParams();
  const { name } = params;

  const [currPage, setCurrPage] = useState("custom");
  const [joinCodeValue, setJoinCodeValue] = useState("");
  const [customCodeValue, setCustomCodeValue] = useState("");
  const [timeValue, setTimeValue] = useState(Date.now());

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#021629" }}>
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
          <CustomCode onCodeChange={setCustomCodeValue} />
          <TimePicker onTimeChange={setTimeValue} />
          <SetAlarmBtn
            name="Set"
            code={customCodeValue}
            alarmTime={timeValue}
            profile={name}
          />
        </View>
      )}
      {currPage == "join" && (
        <View>
          <JoinCode onCodeChange={setJoinCodeValue} />
          <SetAlarmBtn name="Join" code={joinCodeValue} profile={name} />
        </View>
      )}
      {/*<ScrollView>
        <SoundBoard />
      </ScrollView>*/}
    </SafeAreaView>
  );
};

export default Home;
