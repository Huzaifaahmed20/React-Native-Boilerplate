import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    navigate("ThirdScreen");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 30 }}> Screen Two </Text>
        <Button onPress={this._onPressButton} title="Go to TABS Page" />
      </View>
    );
  }
}
