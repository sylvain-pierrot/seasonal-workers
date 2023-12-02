import { CommonActions } from "@react-navigation/native";
import { Redirect, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { setIsAuthenticated } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { useAuth } from "../../hooks/useAuth";
import { useGetSeasonnalProfileQuery } from "../../store/services/users";

interface ITab {
  icon: string;
  name: string;
  label: string;
}

export default function TabsLayout() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { getTokens } = useAuth();
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authReducer
  );
  const [skip, setSkip] = useState(true);
  const { isSuccess, isUninitialized, isFetching, refetch } =
    useGetSeasonnalProfileQuery(undefined, {
      skip,
    });

  useEffect(() => {
    const fetchAuth = async () => {
      setIsLoading(true);
      const tokens = await getTokens();

      if (tokens) {
        // const { sub, preferred_username, email, given_name, family_name } =
        //   jwtDecode<JwtPayload & any>(tokens.idToken);
        const { exp, sub } = jwtDecode<JwtPayload & { sub: string }>(
          tokens.idToken
        );

        // if (!exp || Date.now() >= exp * 1000) {
        // } else {
        if (isUninitialized) {
          setSkip(false);
        } else {
          refetch();
        }

        dispatch(setIsAuthenticated({ isAuth: true }));
        // }
      }
      setIsLoading(false);
    };

    fetchAuth();
  }, [dispatch, isAuthenticated]);

  const tabs: ITab[] = [
    {
      icon: "briefcase",
      name: "(jobs)",
      label: t("auth.pages.jobs.label"),
    },
    {
      icon: "chat",
      name: "messages",
      label: t("auth.pages.messages.label"),
    },
    {
      icon: "calendar",
      name: "candidatures",
      label: t("auth.pages.candidatures.label"),
    },
    {
      icon: "account",
      name: "profile",
      label: t("auth.pages.profile.label"),
    },
  ];

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        color={"#000"}
        size={"large"}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      />
    );
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!isAuthenticated) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return (
    <BottomSheetModalProvider>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
        }}
        sceneContainerStyle={{ backgroundColor: "#FFFFFF" }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            theme={{
              colors: {
                onSurface: "#FFFFFF",
              },
            }}
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
    </BottomSheetModalProvider>
  );
}
