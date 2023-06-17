import React from "react";
import { View, Text, StatusBar } from "react-native";

export default function Homescreen() {
  return (
    <View className="flex justify-center items-center text-white bg-red-400 min-h-screen">
      <Text>Open up App.js to start on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
