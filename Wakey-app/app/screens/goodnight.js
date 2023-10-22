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
import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/initSupabase';


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
        fontWeight: 'bold',
        paddingTop: 6
    },
    first: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 125
    }
})

const Goodnight = () => {
    const params = useLocalSearchParams();
    const { code } = params;
    const [alarms, setAlarms] = useState(null);

    useEffect(() => {
        const fetchWakeyTime = async () => {
            try {
                let { data, error } = await supabase
                    .from('alarms')
                    .select('wakey_time')
                    .eq('alarm_code', code);
                
                console.log("this", data)
                const dateObj = new Date(data[0].wakey_time);
                const hours = String(dateObj.getHours()).padStart(2, '0');
                const minutes = String(dateObj.getMinutes()).padStart(2, '0');

                const formattedTime = `${hours}:${minutes}`;
                setAlarms(formattedTime);
            } catch (err) {
                console.error("Error fetching wakey_time:", err);
                setError(err);
            }
        }

        fetchWakeyTime();
    }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1d1e1f" }}>
        <Clock />
        
        <View>
        <Text style={styles.first}>
            Goodnight, sleep tight! 
        </Text>
        <Text style={styles.textPrompt}>
            Alarm set for { alarms }
        </Text>
        </View>
    </SafeAreaView>
    
  );
};

export default Goodnight;