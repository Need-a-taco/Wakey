import { SafeAreaView } from "react-native";
import Clock from "./clock";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    useWindowDimensions,
    Image,
    TextInput,
  } from "react-native";

const Goodnight = () => {
  return (
    <SafeAreaView>
        <Clock />
        
        <View>
        <Text style={styles.textPrompt}>
            Goodnight, sleep tight!
        </Text>
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    textPrompt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
      },
    container: {
        flex: 1,
        width: "100%",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        height: 250,
    },
    date: {
        color: "#f0f2f5",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 20,
    },
    time: {
        fontSize: 82,
        fontWeight: "bold",
        color: "#f0f2f5",
    },
    textPrompt: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Goodnight;