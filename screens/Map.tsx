import React, { useCallback, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import MapView, { MapEvent, Marker } from "react-native-maps";
import { MapProps } from "../App";
import IconButton from "../components/UI/IconButton";

interface Iregion {
  latitude: number;
  latitudeDelta: number;
  longitude: number;
  longitudeDelta: number;
}

const Map = ({ navigation }: MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number }>();
  const region: Iregion = {
    latitude: 37.78,
    latitudeDelta: 22.43,
    longitude: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectLocationHandler = (event: MapEvent) => {
    console.log(event);
    const lat: number = event.nativeEvent.coordinate.latitude;
    const lng: number = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!",
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation?.lat,
      pickedLng: selectedLocation?.lng,
    });
  }, [navigation,selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView style={S.map} initialRegion={region} onPress={selectLocationHandler}>
      {selectedLocation ? (
        <Marker
          title="Picked Location!"
          coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
        />
      ) : null}
    </MapView>
  );
};

export default Map;

const S = StyleSheet.create({
  map: {
    flex: 1,
  },
});
