import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const MapboxList = () => (
  <View style={styles.container}>
    <Text style={styles.title}>L I S T</Text>
    <Image
      style={styles.image}
      source={{ uri: 'https://i.imgur.com/zwx84jE.png' }}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indianred',
    alignItems: 'center',
    paddingTop: 21,
    marginBottom: 50
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },
  text: {
    color: 'white',
    marginTop: 100,
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
})

export default MapboxList
