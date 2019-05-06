import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    navigate("SecondScreem");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 30 }}> Screen One </Text>
        <Button onPress={this._onPressButton} title="Go to next Page" />
      </View>
    );
  }
}
