import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { center } from "../../assets/customStyle/center";
import { hpx, px, fpx } from "../../assets/customStyle/px";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";
import { getAddress, getMapPreview } from "../../util/location";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import { AddPlaceProps, MapProps, RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

export interface IpickedLocation {
  lat: number;
  lng: number;
  address?: string;
}

interface ILocationPicker {
  onPickLocation: (location: IpickedLocation) => void;
}

const LocationPicker = ({ onPickLocation }: ILocationPicker) => {
  const [pickedLocation, setPickedLocation] = useState<IpickedLocation>();
  const isFocused = useIsFocused();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<any>();

  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = route.params && {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    const handleLocation = async () => {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
        onPickLocation({ ...pickedLocation, address });
      }
    };
    handleLocation();
  }, [pickedLocation]);

  const verifyPermissions = async () => {
    if (!locationPermissionInformation) return false;
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("권한없음", "위치 권한이 없어서 찍을 수 없어요");
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    console.log("location:: ", location);
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      <View style={S.mapPreview}>
        {pickedLocation ? (
          <Image
            style={S.image}
            source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
          />
        ) : (
          <Text>No location picked yet.</Text>
        )}
      </View>
      <View style={S.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const S = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: hpx(200),
    marginVertical: hpx(8),
    ...center,
    backgroundColor: Colors.primary400,
    borderRadius: px(4),
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: px(4),
  },
});
