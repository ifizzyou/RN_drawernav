import React, { lazy, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { fpx, hpx, px } from "../../assets/customStyle/px";
import { Colors } from "../../constants/colors";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const changedTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText);
  };

  return (
    <ScrollView style={S.form}>
      <View>
        <Text style={S.lavel}>Title</Text>
        <TextInput style={S.input} onChangeText={changedTitleHandler} value={enteredTitle} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const S = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  lavel: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: hpx(8),
    paddingHorizontal: px(4),
    paddingVertical: hpx(8),
    fontSize: fpx(16),
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary100,
  },
});
