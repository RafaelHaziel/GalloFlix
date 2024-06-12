import React from "react";
import { View, StyleSheet } from "react-native";
import { auth } from "../firebase.config";
import { StatusBar } from "expo-status-bar";

const Splash = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      } else {
        navigation.replace("Login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.container} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;