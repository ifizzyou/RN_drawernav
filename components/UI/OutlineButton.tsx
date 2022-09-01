import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
import { hpx, px, fpx } from "../../assets/customStyle/px";
import { center } from "../../assets/customStyle/center";
import { IChildren } from "../../interface/children";

interface IOutlineButton extends IChildren {
  onPress: () => void;
  icon: any;
}

const OutlineButton = ({ onPress, icon, children }: IOutlineButton) => {
  return (
    <Pressable style={({ pressed }) => [S.button, pressed && S.pressed]} onPress={onPress}>
      <Ionicons style={S.icon} name={icon} size={18} color={Colors.primary500} />
      <Text style={S.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const S = StyleSheet.create({
  button: {
    paddingHorizontal: px(12),
    paddingVertical: hpx(6),
    margin: px(4),
    ...center,
    borderWidth: px(1),
    borderColor: Colors.primary500,
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
