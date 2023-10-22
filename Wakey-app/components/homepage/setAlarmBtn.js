import { Button } from "react-native";
import { View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import "react-native-url-polyfill/auto";
import Goodnight from "../../app/screens/goodnight";
import { router } from "expo-router";
import { supabase } from "../../config/initSupabase";
import { useEffect } from "react";

const SetAlarmBtn = (props) => {
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);
  const [alarmMsg, setAlarmMsg] = useState(false);
  const message =
    props.name === "Set"
      ? "Alarm Code already exists, try again"
      : "Join Code does not exist, try again";

  const switchGoodnight = async (event) => {
    if (props.name === "Set") {
      let { data, error } = await supabase
        .from("alarms")
        .select("alarm_code")
        .eq("alarm_code", props.code)
        .single(); // Assuming you expect a single result
  
    // if there is an error it doesn't exist in the database
    if (error) {
      setValid(true)
      setAlarmMsg(false)
    } else {
      // Use the data
      console.log(data);
      setValid(false)
      setAlarmMsg(true)
    }


      console.log(data);

        
        if(!data) {
          // add to alarm codes database
          const { data, error } = await supabase.from('alarms').insert([
            .from("alarms")
            .insert([
            {
              alarm_code: props.code,
              set_time: new Date().toISOString().toLocaleString("en-US"),
              wakey_time: props.alarmTime.toISOString().toLocaleString("en-US"),
            },
          ])
          .select();
        console.log(data, error);
        setError(error);
        navigateIfValid(true);
      }
      // should add a check here to make sure the created code is unique
      else {
        console.log("must b unique");
      }
    } else {
      let { data, error } = await supabase
        .from("alarms")
        .select("alarm_code")
        .eq("alarm_code", props.code)
        .single(); // Assuming you expect a single result

      if (error) {
        setValid(false);
        setAlarmMsg(true);
      } else {
        // Use the data
        console.log(data);
        setValid(true);
        setAlarmMsg(false);
        navigateIfValid(true);
      }
    }
  };

  const navigateIfValid = (shouldBeValid) => {
    console.log(props.code, error);
    if (shouldBeValid) {
      router.replace({
        pathname: "/screens/goodnight",
        params: { code: props.code },
      });
    }
  };

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

  const addProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .update({ 'alarm_code': props.code })
      .eq('name', props.profile)
      .select();

    console.log(data, error);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={switchGoodnight}
        disabled={!props.code}
      >
        <Text style={styles.loginText}>{props.name} Alarm</Text>
      </TouchableOpacity>
      {alarmMsg && (
        <Text
          style={{
            color: "red",
            textAlign: "center",
            marginTop: 20,
            fontSize: 17,
          }}
        >
          {message}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default SetAlarmBtn;
