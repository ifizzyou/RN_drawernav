import React, { lazy, useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { fpx, hpx, px } from "../../assets/customStyle/px";
import { Colors } from "../../constants/colors";
import { Place } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker, { IpickedLocation } from "./LocationPicker";

const PlaceForm = ({ onCreatePlace }: { onCreatePlace: (place: Place) => void }) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>();
  const [pickedLocation, setPickedLocation] = useState<IpickedLocation>();
  const changedTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText);
  };

  const takeImageHandler = (imageUri: string) => {
    setSelectedImage(imageUri);
  };

  const pickLocationHandler = useCallback((location: IpickedLocation) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    console.log("ENTER", enteredTitle, "TITLE");
    console.log(selectedImage);
    console.log(pickedLocation);
    if (enteredTitle && selectedImage && pickedLocation) {
      const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
      onCreatePlace(placeData);
    }
  };

  return (
    <ScrollView style={S.form}>
      <View>
        <Text style={S.lavel}>Title</Text>
        <TextInput style={S.input} onChangeText={changedTitleHandler} value={enteredTitle} />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
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
