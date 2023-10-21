import { View, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from "react";
import { SafeAreaView } from 'react-native';


const TimePicker = (prop) => {
  const [date, setDate] = useState(new Date());

  const changedTime = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    prop.onTimeChange(currentDate);
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

export default TimePicker;
