import React from "react";
import { StyleSheet, Text, View } from "react-native";
import  Link  from 'next/link';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome 👋 to the web deployment for the react natively project</Text>
      <Text style={styles.text}>This page is delivering server side rendered react-native components with SWC Minification</Text>
      <Text style={styles.text}>it's a work in progress <Link href="https://github.com/useCollin/react-natively">watch it grow here</Link></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});