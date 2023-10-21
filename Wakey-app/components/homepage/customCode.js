import { useState } from "react";
import SetAlarmBtn from "../../components/homepage/setAlarmBtn";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: -10,
    height: 50,
    marginBottom: 6,
    marginLeft: 30,
    marginRight: 30,
  },
  searchWrapper: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    height: "80%",
  },
  searchInput: {
    //fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    color: "white",
  },
  textPrompt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
const CustomCode = () => {
  const [alarmCode, setAlarmCode] = useState("");

  return (
    
    <View style={styles.searchContainer}>
      <Text style={styles.textPrompt}>Alarm Code:</Text>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={alarmCode}
          alarmcode={alarmCode}
          onChangeText={(text) => setAlarmCode(text)}
          placeholder="Enter custom alarm code"
        />
         <SetAlarmBtn alarmCode={alarmCode}/>
      </View>
    </View>
    
  );
};

export default CustomCode;
