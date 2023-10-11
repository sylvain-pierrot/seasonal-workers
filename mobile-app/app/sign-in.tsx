import { Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useKeycloak } from "../hooks/useKeycloak";

export default function SignIn() {
  const { signIn } = useKeycloak();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
