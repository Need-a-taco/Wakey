import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TextInput,
    TouableOpacity
  } from "react-native";
import React, { useState } from "react";
import {supabase } from "../config/initSupabase";
import { router } from "expo-router";


const styles = StyleSheet.create({
    buttonText: {
        color: "white",
        fontSize: 35,
        textAlign: "center",
        paddingTop: 200,
        paddingBottom: 50
    },
    searchInput: {
        //fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
        color: "white",
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
      button: {
        marginRight: 50,
        marginLeft: 50,
        marginTop: 20,
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


const Name = () => {
    const [name, setName] = useState("");

    const uploadName = async (event) => {
        const { data, error } = await supabase
            .from('profiles')
            .insert([
            { name: name},
            ])
            .select();
        router.replace({pathname: 'home', params: {name: name}});
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1d1e1f" }}>
            <Text style={styles.buttonText}>Please enter your name:</Text>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                        }}
                        placeholder="Enter your name"
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.button} onPress={uploadName}>
                <Text style={styles.loginText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>                
    )
}

export default Name;