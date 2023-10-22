import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  TouableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { supabase } from "../config/initSupabase";
import { router } from "expo-router";

const styles = StyleSheet.create({
  entryText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 90,
    fontStyle: "italic",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    paddingTop: 70,
    paddingBottom: 30,
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
    color: "#dae5f0",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
  image: {
    width: 350,
    height: 100,
  },
});

const Name = () => {
  const [name, setName] = useState("");

  const uploadName = async (event) => {
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ name: name }])
      .select();
    router.replace({ pathname: "home", params: { name: name } });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#021629" }}>
      <Text style={styles.entryText}>Welcome to</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/wakey-banner.png")}
        />
      </View>

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
      <TouchableOpacity style={styles.button} onPress={uploadName}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Name;
