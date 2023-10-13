import React from "react";
import { Redirect, Tabs } from "expo-router";
import { useKeycloak } from "../../hooks/useKeycloak";
import { BottomNavigation, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CommonActions } from "@react-navigation/native";

const tabs: {
  icon: string;
  name: string;
  label: string;
}[] = [
  { icon: "briefcase", name: "index", label: "Jobs" },
  { icon: "chat", name: "messages", label: "Messages" },
  { icon: "calendar", name: "candidatures", label: "Candidatures" },
  { icon: "account", name: "profile", label: "Profile" },
];

export default function TabsLayout() {
  const { isLoggedIn, isLoading } = useKeycloak();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!isLoggedIn) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          shifting
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
              route.state?.index;
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            if (typeof options.tabBarLabel === "string") {
              return options.tabBarLabel;
            }

            return options.title !== undefined ? options.title : route.name;
          }}
        />
      )}
    >
      {tabs.map(({ icon, name, label }, key) => (
        <Tabs.Screen
          {...{ key }}
          name={name}
          options={{
            tabBarLabel: label,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon
                  name={focused ? icon : `${icon}-outline`}
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
}
