import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RelayOn from './components/RelayOn';
import RelayOff from './components/RelayOff';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function App() {
  return (
    // <NavigationContainer>
    //   <StackActions.Navigator>

    //   </StackActions.Navigator>

    <View style={styles.container}>
      <Text >Control remoto</Text>

      <RelayOn styles={styles}/>
      <RelayOff styles={styles}/>
      <FlashMessage position="bottom"/>
      <StatusBar style="auto" />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  }
});
