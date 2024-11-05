import { Ionicons } from "@expo/vector-icons";

import AntDesign from "@expo/vector-icons/AntDesign";

const icon = {
  index: ({ color }: { color: string }) => (
    <AntDesign name="home" size={22} color={color} />
  ),
  payment: ({ color }: { color: string }) => (
    <AntDesign name="profile" size={24} color="black" />
  ),
  profile: ({ color }: { color: string }) => (
    <Ionicons name="home-outline" size={24} color={color} />
  ),
  setting: ({ color }: { color: string }) => (
    <Ionicons name="home-outline" size={24} color={color} />
  ),
};
