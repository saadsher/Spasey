import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapExample from './Mapbox'

const Home = () => (
  <View style={styles.container}>
    <StatusBar barStyle='light-content' animated networkActivityIndicatorVisible/>
    <MapExample style={styles.map} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    paddingTop: 21
  },
  profilebtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 10,
    marginTop: 30,
    padding: 10,
    height: 60,
    backgroundColor: 'darkseagreen',
    borderRadius: 35,
    opacity: .7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white'
  },
  servicebtn: {
    position: 'absolute',
    right: 10,
    top: 0,
    marginLeft: 10,
    marginTop: 30,
    padding: 10,
    height: 70,
    backgroundColor: 'steelblue',
    borderRadius: 35,
    opacity: .7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // title: {
  //   marginBottom: 20,
  //   fontSize: 22,
  //   textAlign: 'center'
  // },
})

export default Home
