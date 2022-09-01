import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fpx } from "../../assets/customStyle/px";
import { Colors } from "../../constants/colors";
import PlaceItem from "./PlaceItem";

interface IPlacesList {
  places?: [
    {
      id: string;
      imageUri: string;
      title: string;
      address: string;
    },
  ];
}

const PlacesList = ({ places }: IPlacesList) => {
  if (!places || Number(places.length) === 0) {
    return (
      <View style={S.fallbackContainer}>
        <Text style={S.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }
  return (
    <View style={S.fallbackContainer}>
      <Text style={S.fallbackText}>No places added yet - start adding some!</Text>
    </View>
  );

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={() => null} />}
    />
  );
};

export default PlacesList;

const S = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: fpx(16),
    color: Colors.primary200,
  },
});
