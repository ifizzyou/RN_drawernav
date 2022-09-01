import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { AddPlaceProps } from "../App";
import { Place } from "../models/place";

const AddPlace = ({ navigation }: AddPlaceProps) => {
  const createPlaceHandler = (place:Place ) => {
    navigation.navigate("AllPlaces", {
      place,
    });
  };
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const S = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
