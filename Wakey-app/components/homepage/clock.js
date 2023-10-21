import dayjs from "dayjs";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
} from "react-native";

const styles = StyleSheet.create({
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
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 75,
  },
  icon: {
    backgroundColor: "#00000050",
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  panGestureContainerUnlock: {
    position: "absolute",
    width: "100%",
    height: 200,
    bottom: 0,
    left: 0,
    transform: [
      {
        translateY: 100,
      },
    ],
  },
});

const Clock = () => {
  const [date, setDate] = useState(dayjs());
  setInterval(() => {
    setDate(dayjs());
  }, 60000);
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(dayjs()); // dayjs() always gives us the current time
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.date}>{dayjs().format("dddd, MMMM DD")}</Text>
      <Text style={styles.time}>{dayjs().format("hh:mm")}</Text>
    </View>
  );
};

export default Clock;
