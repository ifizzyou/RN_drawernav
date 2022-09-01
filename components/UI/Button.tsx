import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { shadow } from "../../assets/customStyle/shadow";
import { Colors } from "../../constants/colors";
import { IChildren } from "../../interface/children";

interface IButton extends IChildren {
  onPress: () => void;
}

const Button = ({ onPress, children }: IButton) => {
  return (
    <Pressable style={({ pressed }) => [S.button, pressed && S.pressed]} onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default Button;

const S = StyleSheet.create({
  button: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    ...shadow,
  },
  pressed: { opacity: 0.7 },
  text: { textAlign: "center", fontSize: 16, backgroundColor: Colors.primary500 },
});
