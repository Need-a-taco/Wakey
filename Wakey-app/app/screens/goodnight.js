import { SafeAreaView } from "react-native";
import Clock from "../../components/homepage/clock";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import { supabase } from "../../config/initSupabase";
import dayjs from "dayjs";
import { router } from "expo-router";

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
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 20,
  },
  first: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 100,
  },
  second: {
    fontSize: 20,
    color: "#cad5e8",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 180,
  },
});

const Goodnight = () => {
  const params = useLocalSearchParams();
  const { code } = params;
  const [alarms, setAlarms] = useState(null);
  const [equal, setEqual] = useState(false);

  useEffect(() => {
    const fetchWakeyTime = async () => {
      try {
        let { data, error } = await supabase
          .from("alarms")
          .select("wakey_time")
          .eq("alarm_code", code);

        console.log(data);
        const dateObj = new Date(data[0].wakey_time);
        const hours = String(dateObj.getHours()).padStart(2, "0");
        const minutes = String(dateObj.getMinutes()).padStart(2, "0");

        const formattedTime = `${hours}:${minutes}`;
        const stdTime = toStandardTime(formattedTime);
        setAlarms(stdTime);
        console.log("formatted", alarms);
      } catch (err) {
        console.error("Error fetching wakey_time:", err);
        setError(err);
      }
    };

    fetchWakeyTime()
  }, []);

let timerId;

const startTimer = () => {
  timerId = setInterval(() => {
    const currentTimeEqualsAlarm = dayjs().format("hh:mm A") === alarms;
    
    if (currentTimeEqualsAlarm) {
      navigateIfValid(true);
      clearInterval(timerId);
      setEqual(false);
      return
    } else {
      setEqual(false);  // you can set this to false or remove it if not needed elsewhere
    }

    console.log(dayjs().format("hh:mm A"), alarms, equal);
  }, 5000);
};

useEffect(() => {
  if (alarms) {
    startTimer();
  }

  return () => {
    clearInterval(timerId);
  };
}, [alarms]);

  //   date.format("hh:mm A") === toStandardTime(alarms); // dayjs() always gives us the current time

  function toStandardTime(time) {
    const hours = parseInt(time.substring(0, 2), 10);
    const mins = time.substring(3);

    const period = hours >= 12 ? "PM" : "AM";

    let stdHours = hours % 12;
    if (stdHours === 0) {
      stdHours = 12;
    }
    if (stdHours <= 9) {
      stdHours = "0" + stdHours;
    }
    return `${stdHours}:${mins} ${period}`;
  }

  // to go to next screen once alarm rings
  const navigateIfValid = (shouldBeValid) => {
    console.log(code);

    if (shouldBeValid) {
      router.replace({
        pathname: "/screens/wakeywakey",
        params: { code: code },
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1d1e1f" }}>
      <Clock />

      <View>
        <Text style={styles.first}>Goodnight, sleep tight!</Text>
        <Text style={styles.textPrompt}>Alarm set for {alarms}</Text>
        <Text style={styles.second}>Wakey Code: {code}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Goodnight;
