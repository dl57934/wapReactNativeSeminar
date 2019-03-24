import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import DustPage from "./dustPage";
import getFineDustInfo from "./GetFineDustInfo";

export default class App extends Component {
  state = {
    isReceiveData: false,
    positionInfo: "",
    pollution: "",
    weather: ""
  };

  componentDidMount() {
    this._GetLocation();
  }

  render() {
    const { isReceiveData, pollution, weather, positionInfo } = this.state;

    return (
      <Fragment>
        <StatusBar hidden={true} />

        {isReceiveData ? (
          <DustPage
            pollution={pollution}
            weather={weather}
            positionInfo={positionInfo}
          />
        ) : (
          <View style={styles.container}>
            <Entypo name="air" size={100} color="white" />
            <ActivityIndicator color="black" />
            <Text style={styles.title}>Awesome Find Dust</Text>
          </View>
        )}
      </Fragment>
    );
  }

  _GetLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { latitude, longitude }
      } = position;

      getFineDustInfo({ lat: latitude, lon: longitude }).then(receive => {
        const { weather, pollution, positionInfo } = receive;
        this.setState({
          isReceiveData: true,
          positionInfo,
          weather,
          pollution
        });
      });
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
