import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BrowserIcon } from "../assets/icons";

import DocxScreen from "../screens/DocxScreen";
import ExcelScreen from "../screens/ExcelScreen";
import PPTScreen from "../screens/PPTScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <View>
    <Divider />
    <BottomNavigation
      appearance="noIndicator"
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab title="Docx" icon={BrowserIcon} />
      <BottomNavigationTab title="Excel" icon={BrowserIcon} />
      <BottomNavigationTab title="Ppt" icon={BrowserIcon} />
    </BottomNavigation>
  </View>
);

export const BottomTabsNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Docx" component={DocxScreen} />
    <Screen name="Excel" component={ExcelScreen} />
    <Screen name="Ppt" component={PPTScreen} />
  </Navigator>
);
