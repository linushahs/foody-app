import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import Homescreen from "./screens/Homescreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Homescreen />
    </SafeAreaProvider>
  );
}
