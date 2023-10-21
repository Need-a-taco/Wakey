/* import everything we need. This includes a bunch of stuff from
the react-native framework, like SafeAreaView to contain our page
elements, the StyleSheet to help allow us to provide styling code,
and Text and View to specifically contain our messages displayed
on the app, in addition to a few other little things. 

Then we also import the Clock that we coded in Clock.js, which is
a cool streamlined feature from react native! 

Then we have to get supabase set up so we can retrieve and display
exactly what time the alarm is going to go off at. */

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    useWindowDimensions,
    Image,
    TextInput,
  } from "react-native";
  import Clock from "../../components/homepage/clock";
  import { supabase } from '@supabase/supabase-js';

  /*
// Initialize the database.
const { db } = supabase; 

let { data: alarms, error } = await supabase
  .from('alarms')
  .select('set_time') */


const Goodnight = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1d1e1f" }}>
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