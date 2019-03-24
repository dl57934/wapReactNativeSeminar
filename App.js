import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import getFineDustInfo from "./GetFineDustInfo";

export default class App extends Component {
  state = { isReceiveData: false };

  componentDidMount() {
    this._GetLocation();
  }

  render() {
    const { isReceiveData } = this.state;
    console.log(isReceiveData);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ActivityIndicator size="large" color="black" />
        {isReceiveData ? (
          <Fragment>
            <Entypo name="air" size={100} color="white" />
            <Text style={styles.title}>Awesome Find Dust</Text>
          </Fragment>
        ) : (
          <Text style={styles.title}>Reiceve data</Text>
        )}
      </View>
    );
  }

  _GetLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { latitude, longitude }
      } = position;

      const receive = getFineDustInfo({ lat: latitude, lon: longitude });
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90909090",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 30,
    marginBottom: "100%",
    color: "white",
    fontWeight: "bold"
  }
});
