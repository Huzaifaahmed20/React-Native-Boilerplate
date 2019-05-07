import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";

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
  fbLogin = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.warn("Login cancelled");
        } else {
          console.warn(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 30 }}> Screen One </Text>
        <Button onPress={this._onPressButton} title="Go to next Page" />
        <Button onPress={this.fbLogin} title="Login with FB" />

        {/* <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.warn("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.warn("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.warn(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/> */}
      </View>
    );
  }
}
