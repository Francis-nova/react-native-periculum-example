import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {analytics, affordability} from 'react-native-periculum';

const token = '';

const App = () => {
  useEffect(() => {
    const reference = 'lorem5';
  });

  // analytics customer data...
  async function call() {
    await analytics(token)
      .then(result => {
        console.log(JSON.stringify(result));
      })
      .catch(error => {
        console.log({error});
      });
  }

  // check affordability
  async function affordabilityCheck() {
    affordability(token, 123, 0.2, 2)
      .then(result => {
        console.log(JSON.stringify(result));
      })
      .catch(error => {
        console.log({error});
      });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => call()}>
        <Text style={styles.text}>analytics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnAffordability} onPress={() => affordabilityCheck()}>
        <Text style={styles.text}>affordability Check</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#313B86',
    marginBottom: 10,
  },
  btnAffordability: {
    backgroundColor: '#8F68AD',
  },
  text: {
    color: '#fff',
    padding: 10,
    textAlign: 'center'
  }
});

export default App;
