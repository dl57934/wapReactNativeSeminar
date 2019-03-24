import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GetLocation from "./GetLocation";

export default class App extends React.Component {
  componentWillMount() {
    GetLocation();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Awesome Find Dust</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90909090",
    alignItems: "flex-start",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 30,
    marginLeft: "17%",
    marginBottom: "100%",
    color: "white",
    fontWeight: "bold"
  }
});
