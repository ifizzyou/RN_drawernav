import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

interface IPlaceItem {
  place: {
    imageUri: string;
    title: string;
    address: string;
  };
  onSelect: () => void;
}

const PlaceItem = ({ place, onSelect }: IPlaceItem) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const S = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
