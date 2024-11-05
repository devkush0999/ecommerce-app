import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>index</Text>
      <Link href={"/profile"}> profile</Link>
      <Link href={"/payment"}>profile</Link>
    </View>
  );
}
