import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {analyticsRequestV1, analyticsRequestV2} from 'react-native-periculum';

let publickey = '';
let reference = '';
let mobile = '';
let bvn = '';

const App = () => {
  useEffect(() => {});

  // analytics customer data...
  async function call(option) {
    if (option === 'v1' || option === 'V1') {
      await analyticsRequestV1(publickey, reference, mobile, bvn)
        .then(result => {
          console.log(JSON.stringify(result));
        })
        .catch(error => {
          console.log({error});
        });
    } else if (option === 'v2' || option === 'V2') {
      await analyticsRequestV2(publickey, reference, mobile, bvn)
        .then(result => {
          console.log(JSON.stringify(result));
        })
        .catch(error => {
          console.log({error});
        });
    } else {
      console.log('SDK version not found');
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => call('v1')}>
        <Text style={styles.text}>Analytics V1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => call('v2')}>
        <Text style={styles.text}>Analytics V2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    justifyContent: 'center',
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
    textAlign: 'center',
  },
});

export default App;
