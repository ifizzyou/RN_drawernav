import { FlexAlignType } from "react-native";

interface Icenter {
  [key: string]: FlexAlignType | undefined;
}
export const center: Icenter = {
  justifyContent: "center",
  alignItems: "center",
};
