import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroudColorArrays, LevelImo } from "./db";

const DustPageView = ({ pollution: { aqius }, weather, positionInfo }) => {
  console.log(aqius, weather, positionInfo);
  const { city, country } = positionInfo;
  const { tp, ts } = weather;
  const time = ts.split("T")[0];
  const level = getLevel(aqius);
  console.log("level" + level);
  return (
    <View style={{ flex: 1, backgroundColor: backgroudColorArrays[level] }}>
      <View style={styles.upSection}>
        {LevelImo[level]}
        <Text style={styles.temperate}>{tp}°C</Text>
        <Text style={styles.temperate}>{time}</Text>
      </View>
      <View style={styles.downSection}>
        <Text style={styles.temperate}>현재위치</Text>
        <Text style={styles.country}>{country}</Text>
        <Text style={styles.city}>{city}</Text>
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
  temperate: { color: "white", fontWeight: "bold", fontSize: 50 },
  country: { color: "white", fontWeight: "bold", fontSize: 40 },
  city: { color: "white", fontWeight: "bold", fontSize: 20 }
});

const getLevel = aqius => (aqius / 50).toFixed(0);
