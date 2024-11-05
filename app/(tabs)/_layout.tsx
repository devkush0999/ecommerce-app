import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TabBar from "@/components/TabBar";

export default function _layout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "help",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
