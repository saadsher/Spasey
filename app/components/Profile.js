import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const Profile = () => (
  <View style={styles.container}>
    <Text style={styles.title}>P R O F I L E</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 21,
    marginBottom: 50,
    backgroundColor: 'darkseagreen'
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'darkslategray'
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

export default Profile
