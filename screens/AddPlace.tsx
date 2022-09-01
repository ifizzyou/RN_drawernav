import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = () => {
  return <PlaceForm />;
};

export default AddPlace;

const S = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
