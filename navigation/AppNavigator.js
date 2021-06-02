import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { BottomTabsNavigator } from "./BottomTabsNavigator";

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name={"Home"} component={BottomTabsNavigator} />
    </Navigator>
  </NavigationContainer>
);
