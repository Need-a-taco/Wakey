import { View, Text, SafeAreaView } from "react-native";
import Clock from "../components/homepage/clock";
import { Stack, useRouter } from "expo-router";
import InputField from "../components/homepage/inputField";
import SetAlarm from "../components/homepage/setAlarm";

const Home = () => {
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
      <SetAlarm />
    </SafeAreaView>
  );
};

export default Home;
