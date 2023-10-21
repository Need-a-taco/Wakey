import { View, Text, SafeAreaView } from "react-native";
import Clock from "../components/homepage/clock";
// import { Stack, useRouter } from "expo-router";
import InputField from "../components/homepage/inputField";
import TimePicker from "../components/homepage/timePicker";
import SetAlarmBtn from "../components/homepage/setAlarmBtn";
import { Stack } from "expo-router";

function Home () {
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
      <InputField />
      <TimePicker />
      <SetAlarmBtn name="Set"/>
    </SafeAreaView>
  );
};

export default Home;
