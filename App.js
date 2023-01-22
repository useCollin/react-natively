import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the react natively project</Text>
      <Text>Open up App.js to edit this page</Text>
      <Pressable onPress={() => Linking.openURL('https://www.reactnatively.com')}><Text style={styles.link}>Click here to Go to the website!</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    fontSize: 20,
  }
});
