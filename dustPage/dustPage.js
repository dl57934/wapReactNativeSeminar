import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroudColorArrays, LevelImo, Description } from "./db";
import { LinearGradient } from "expo";

const DustPageView = ({ pollution: { aqius }, weather, positionInfo }) => {
  const { city, country } = positionInfo;
  const { tp, ts } = weather;
  const time = ts.split("T")[0];
  let level = getLevel(aqius);
  const { statusText, explanation } = Description[level];

  return (
    <LinearGradient
      colors={[backgroudColorArrays[level][0], backgroudColorArrays[level][1]]}
      style={styles.container}
    >
      <View style={styles.upSection}>
        <Text style={styles.time}>{time}</Text>
        {LevelImo[level]}
        <Text style={styles.temperate}>{tp}°C</Text>
        <Text style={styles.statusText}>{statusText}</Text>
        <Text style={styles.explanation}>{explanation}</Text>
      </View>
      <View style={styles.downSection}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
    </LinearGradient>
  );
};

export default DustPageView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  downSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temperate: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15
  },
  time: { color: "white", fontSize: 30, marginBottom: 20 },
  country: { color: "white", fontWeight: "bold", fontSize: 25 },
  city: { color: "white", fontWeight: "bold", fontSize: 30, marginTop: 5 },
  statusText: {
    color: "white",
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold"
  },
  explanation: {
    color: "white",
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold"
  }
});

const getLevel = aqius => (aqius / 50).toFixed(0);
