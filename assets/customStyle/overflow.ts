import { Platform } from "react-native";

export const overflow = Platform.OS === "android" ? "hidden" : "visible";
