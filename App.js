import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, ActivityIndicator, SafeAreaView, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <SafeAreaView style={styles.container}>
      <>
        {loading === true ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : null}

        <WebView source={{ uri: "https://gsh4.net/id10/mobile/" }} />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
