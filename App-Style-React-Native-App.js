
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding:0
  },

  childContainer: {
    backgroundColor:'brown'
  },

  text: {
    color: 'red',
    fontSize: 20    
  }
});
