import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const Feedback = () => (
  <View style={styles.container}>
    <Text style={styles.title}>F E E D B A C K</Text>
  </View>
)

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },
  container: {
    flex: 1,
    paddingTop: 21,
    marginBottom: 50,
    backgroundColor: 'coral'
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

export default Feedback
