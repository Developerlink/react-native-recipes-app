import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import TabMealsNavigator from "./navigation/TabMealsNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { Provider } from "react-redux";
import store from "./store/configureStore";

enableScreens();

const fetchFontsAsync = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);

  if (!fontIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFontsAsync}
        onFinish={() => setFontIsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="black" style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
});
