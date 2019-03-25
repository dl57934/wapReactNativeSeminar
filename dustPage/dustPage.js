import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather
} from "@expo/vector-icons";

const DustPageView = ({ pollution: { aqius }, weather, positionInfo }) => {
  console.log(aqius, weather, positionInfo);
  const { city, country } = positionInfo;
  const level = getLevel(aqius);
  console.log("level" + level);
  return (
    <View style={{ flex: 1, backgroundColor: backgroudColorArrays[level] }}>
      <View style={styles.upSection}>
        <MaterialCommunityIcons name="tree" size={130} color="white" />
        <Feather name="cloud" size={130} color="white" />
        <AntDesign name="meh" size={130} color="white" />

        {/* <Text style={styles.temperate}>{weather.tp} °C</Text> */}
      </View>
      <View style={styles.downSection}>
        <AntDesign name="frowno" size={130} color="white" />
        <AntDesign name="smileo" size={130} color="white" />
        <MaterialCommunityIcons
          name="emoticon-devil"
          size={130}
          color="white"
        />
      </View>
    </View>
  );
};

export default DustPageView;

const styles = StyleSheet.create({
  upSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  downSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
  temperate: { color: "white", fontWeight: "bold", fontSize: 50 }
});

const backgroudColorArrays = [
  "rgb(32, 196, 78)",
  "rgb(255, 219, 38)",
  "rgb(249, 103, 9)",
  "rgb(216, 38, 47)",
  "rgb(160, 47, 217)",
  "rgb(134, 50, 53)"
];

const getLevel = aqius => (aqius / 50).toFixed(0);
