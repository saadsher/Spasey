import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import List from './List'

const MapboxList = () => (
  <View style={styles.container}>
    <Text style={styles.title}>L I S T</Text>
    {/*<Image
      style={styles.image}
      source={{ uri: 'https://i.imgur.com/zwx84jE.png' }}/>*/}
    <List style={styles.list}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'darkslategray',
    paddingTop: 21,
    paddingBottom: 7
  },
  list: {
    marginTop: -30,
    alignSelf: 'stretch'
  }
})

export default MapboxList
