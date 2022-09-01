import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";

const AllPlaces = () => {
  return <PlacesList places={[{ id: "a", title: "a", imageUri: "a", address: "a" }]} />;
};

export default AllPlaces;

const S = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
