import { useIsFocused } from "@react-navigation/native";
import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AllPlacesProps } from "../App";
import PlacesList, { IPlacesList } from "../components/Places/PlacesList";
import { Place } from "../models/place";

interface IloadedPlaces {
  id: string;
  imageUri: string;
  title: string;
  address: string;
}

const AllPlaces = ({ route }: AllPlacesProps) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState<any>([]);

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((curPlaces: Place[]) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const S = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
