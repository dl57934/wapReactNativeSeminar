import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const DustPageView = ({ pollution: { aqius }, weather, positionInfo }) => {
  console.log(aqius, weather, positionInfo);
  const level = getLevel(aqius);
  console.log(level);
  return (
    <View style={{ flex: 1, backgroundColor: backgroudColorArrays[level] }}>
      <View style={styles.upSection}>
        <Text>red</Text>
      </View>
      <View style={styles.downSection}>
        <Text>green</Text>
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
  downSection: { flex: 1, alignItems: "center", justifyContent: "center" }
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
