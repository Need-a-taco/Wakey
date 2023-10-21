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
import { createClient } from '@supabase/supabase-js';
import { REACT_NATIVE_SUPABASE_URL, SUPABASE_KEY } from "@env";
import { useState, useEffect } from "react";

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

const supabase = createClient(REACT_NATIVE_SUPABASE_URL, SUPABASE_KEY);

const Goodnight = () => {
    const params = useLocalSearchParams();
    const { code } = params;

    const [fetchTime, setFetchTime] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data, error } = await supabase
              .from('alarms')
              .select('wakey_time')
              .eq('alarm_code', code);
    
            if (error) {
              console.error('Error fetching data:', error);
            } else {
              if (data.length > 0) {
                setFetchTime(data[0].set_time);
              }
            } 
          } catch (error) {
            console.error('Error:', error);
            }
          };

        fetchData();
      }, [code]);

    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1d1e1f" }}>
        <Clock />
        
        <View>
        <Text style={styles.textPrompt}>
            Goodnight! {fetchTime}
        </Text>
        </View>
    </SafeAreaView>
    )
};

export default Goodnight;