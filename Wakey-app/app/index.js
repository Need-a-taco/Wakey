import { View, Text, SafeAreaView } from "react-native";
import Clock from "../components/homepage/clock";
import { Stack, useRouter } from "expo-router";

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
    </SafeAreaView>
  );
};

export default Home;
