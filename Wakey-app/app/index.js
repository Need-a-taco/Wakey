import { View, Text, SafeAreaView } from "react-native";
import Clock from "../components/homepage/clock";
import { Stack, useRouter } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>
        Goodnight, sleep tight, don't let the bed bugs bite!
      </Text>
    </View>
  );
};

export default Home;
