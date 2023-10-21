import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

const SetAlarmBtn = (props) => {
  const styles = StyleSheet.create({
    button: {
      marginRight: 50,
      marginLeft: 50,
      marginTop: 50,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#4A5358",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#4A5358",
    },
    loginText: {
      color: "#C3C3C3",
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: "bold",
      fontSize: 17,
    },
  });
  

  return (
    <SafeAreaView>
      <Link href="screens/wakeywakey" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.loginText}>{props.name} Alarm</Text>
        </TouchableOpacity>
      </Link>
      {console.log(props.alarmCode)}
    </SafeAreaView>
  );
};

export default SetAlarmBtn;
