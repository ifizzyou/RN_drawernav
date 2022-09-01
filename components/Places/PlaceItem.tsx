import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { shadow } from "../../assets/customStyle/shadow";
import { Colors } from "../../constants/colors";

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
    <Pressable style={({ pressed }) => [S.item, pressed && S.pressed]} onPress={onSelect}>
      <Image style={S.image} source={{ uri: place.imageUri }} />
      <View style={S.info}>
        <Text style={S.title}>{place.title}</Text>
        <Text style={S.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const S = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    ...shadow,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
