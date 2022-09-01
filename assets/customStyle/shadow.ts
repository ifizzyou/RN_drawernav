import { Platform } from "react-native";

interface Ishadow {
  elevation: number;
  shadowColor: string;
  backgroundColor?: string;
  shadowOpacity: number;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowRadius: number;
  overflow: "hidden" | "visible" | "scroll" | undefined;
}

export const shadow: Ishadow = {
  elevation: 4,
  shadowColor: "black",
  // backgroundColor: "white",
  shadowOpacity: 0.25,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  overflow: Platform.OS === "android" ? "hidden" : "visible",
};
