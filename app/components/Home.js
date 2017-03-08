import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapExample from './Mapbox'

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>S P A S E Y</Text>
    <MapExample />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    paddingTop: 21,
  },
  title: {
    fontSize: 11,
    height: 11,
    marginBottom: -11,
    textAlign: 'center',
    color: 'white',
  },
})

export default Home
