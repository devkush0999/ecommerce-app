import { View, Text, Pressable } from "react-native";
import React from "react";

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, routeName, label } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;
