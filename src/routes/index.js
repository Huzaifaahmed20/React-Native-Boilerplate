import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from "react-navigation";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
import TabOne from "../screens/tabs/TabOne";
import TabTwo from "../screens/tabs/TabTwo";
import TabThree from "../screens/tabs/TabThree";

const Tabs = createMaterialTopTabNavigator({
  FirstTab: {
    screen: TabOne
  },
  SecondTab: {
    screen: TabTwo
  },
  ThirdTab: {
    screen: TabThree
  }
});

const welcomeStack = createStackNavigator({
  FirstScreen: {
    screen: ScreenOne
  },
  SecondScreem: {
    screen: ScreenTwo
  },
  ThirdScreen: {
    screen: Tabs
  }
});

const Root = createSwitchNavigator(
  {
    welcomeStack
  },
  { initialRouteName: "welcomeStack" }
);

export default createAppContainer(Root);
