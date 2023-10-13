import { View, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useKeycloak } from "../hooks/useKeycloak";
import { Button, TextInput } from "react-native-paper";

export default function SignIn() {
  const { signIn } = useKeycloak();

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Email"
        style={styles.input}
        outlineColor="transparent"
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        style={styles.input}
        outlineColor="transparent"
      />
      <Button
        mode={"contained"}
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
        style={styles.button}
      >
        Log In
      </Button>
      <Button
        mode={"text"}
        onPress={() => console.log("Pressed")}
        style={styles.button}
      >
        Forgot yout password?
      </Button>
      <Button
        mode={"outlined"}
        onPress={() => router.push("/sign-up")}
        style={styles.button}
        textColor="#000000"
      >
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 20,
  },
  text: {
    textAlign: "left",
  },
  input: {
    marginTop: 10,
    alignSelf: "stretch",
    textAlign: "left",
  },
  button: {
    marginTop: 20,
    alignSelf: "stretch",
    textAlign: "center",
  },
});
