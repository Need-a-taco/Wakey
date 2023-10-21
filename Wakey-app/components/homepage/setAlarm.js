import { View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';


const SetAlarm = () => {
  const [date, setDate] = useState(new Date());

  const changedTime = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <SafeAreaView>
      {/* <Text>selected: {date.toLocaleString()}</Text> */}
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'time'}
        display={'spinner'}
        is24Hour={true}
        onChange={changedTime}
        themeVariant="dark"
      />
    </SafeAreaView>
  );
};

export default SetAlarm;
