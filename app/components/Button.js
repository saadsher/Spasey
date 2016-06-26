import React from 'react'

import { Text, TouchableHighlight, StyleSheet } from 'react-native'

export default ({label, onPress}) => (
  <TouchableHighlight underlayColor='#35b5ff' onPress={onPress} style={styles.button}>
    <Text style={styles.label}>{label}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 10,
    top: 0,
    marginTop: 30,
    padding: 10,
    height: 50,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white'
  }
})
