import { View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Button, TextInput } from "react-native-paper";
import { defaultStyles } from "../constants/Styles";

export default function ForgotPassword() {
  return (
    <View style={defaultStyles.container}>
      <TextInput
        mode="outlined"
        placeholder="Email"
        style={defaultStyles.input}
        outlineColor="transparent"
      />
      <Button
        mode={"contained"}
        onPress={() => {}}
        style={defaultStyles.button}
      >
        Reset Password
      </Button>
      <Button
        mode={"outlined"}
        onPress={() => router.push("/sign-in")}
        style={defaultStyles.button}
        textColor="#000000"
      >
        Log In
      </Button>
    </View>
  );
}
