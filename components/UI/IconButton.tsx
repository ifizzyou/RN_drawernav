import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { center } from "../../assets/customStyle/center";

interface IIconButton {
  icon: any;
  size: number;
  color: string|undefined;
  onPress: () => void;
}

const IconButton = ({ icon, size, color, onPress }: IIconButton) => {
  return (
    <Pressable style={({ pressed }) => [S.button, pressed && S.pressed]} onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const S = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    ...center,
  },
  pressed: {
    opacity: 0.7,
  },
});
