import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import ParallaxList from './ParallaxList'

const Profile = () => (
  <ParallaxList />
  /* <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.title}>P R O F I L E</Text>
    </View>
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.top}>
          <Text>Top</Text>
        </View>
        <View style={styles.bottom}>
          <Text>Bottom</Text>
        </View>
      </View>
    </ScrollView>
  </View> */
)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column'
  },
  head: {
    flex: .05,
    backgroundColor: 'darkslategray',
    borderBottomWidth: 5,
    borderBottomColor: '#203737',
    paddingTop: 30,
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  body: {
    flex: .95,
    padding: 15,
    backgroundColor: 'white',
  },
  top: {
    // flex: .5,
    backgroundColor: 'green',
  },
  bottom: {
    // flex: .5,
    backgroundColor: 'red',
  }
})

export default Profile
