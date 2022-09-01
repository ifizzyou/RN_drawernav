import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import {
  ImagePickerResult,
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { center } from "../../assets/customStyle/center";
import { hpx, px } from "../../assets/customStyle/px";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";

interface IImagePicker {
  onTakeImage: (imageUri:string) => void;
}

const ImagePicker = ({ onTakeImage }: IImagePicker) => {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<string>();

  const verifyPermissions = async (): Promise<boolean> => {
    if (!cameraPermissionInformation) return false;
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("권한없음", "카메라 권한이 없어서 찍을 수 없어요");
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image: ImagePickerResult = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log("image:: ", image);
    if (!image.cancelled) {
      setPickedImage(image.uri);
      onTakeImage(image.uri);
    }
  };

  return (
    <View>
      <View style={S.imagePreview}>
        {pickedImage ? (
          <Image style={S.image} source={{ uri: pickedImage }} />
        ) : (
          <Text>NO image</Text>
        )}
      </View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlineButton>
    </View>
  );
};

export default ImagePicker;

const S = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: hpx(200),
    marginVertical: hpx(8),
    ...center,
    backgroundColor: Colors.primary400,
    borderRadius: px(4),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: px(4),
  },
});
