import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const Valet = ({_goBack}) => (
  <View style={styles.container}>
    <StatusBar barStyle='default' animated networkActivityIndicatorVisible/>
    <Text style={styles.title}>V A L E T</Text>
    {/*<Button onPress={_goBack} label='Close' />*/}
    <TouchableHighlight underlayColor='whitesmoke' onPress={_goBack} style={styles.backbtn}>
      <Text>Close</Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: 21,
    marginBottom: 50
  },
  backbtn: {
    position: 'absolute',
    right: 10,
    top: 20,
    padding: 10,
    opacity: .7,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Valet
