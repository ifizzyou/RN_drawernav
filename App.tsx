import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import { Place } from "./models/place";

export type RootStackParamList = {
  AllPlaces: { place: Place };
  AddPlace: { pickedLat: number | undefined; pickedLng: number | undefined } | undefined;
  Map: undefined;
};
export type AllPlacesProps = NativeStackScreenProps<RootStackParamList, "AllPlaces">;
export type AddPlaceProps = NativeStackScreenProps<RootStackParamList, "AddPlace">;
export type MapProps = NativeStackScreenProps<RootStackParamList, "Map">;

const Stack = createNativeStackNavigator<RootStackParamList>();

interface IheaderRight {
  tintColor?: string | undefined;
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }: AllPlacesProps) => ({
              title: "Your Favorate Places",
              headerRight: ({ tintColor }: IheaderRight) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
