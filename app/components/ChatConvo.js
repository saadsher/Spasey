import React, {Component} from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import GiftedMessenger from './GiftedMessenger'
import Icon from 'react-native-vector-icons/Ionicons'

const ChatConvo = ({_handleNavigate, _goBack}) => (
  <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.title}>C O N V E R S A T I O N</Text>
      <TouchableHighlight underlayColor='darkslategray' onPress={_goBack} style={styles.backbtn}>
        <Text style={styles.backLabel}>
          <Icon name="ios-arrow-back" size={25} color="white" />
        </Text>
      </TouchableHighlight>
    </View>
    <GiftedMessenger style={styles.GiftedMessenger}/>
  </View>
)

const styles = StyleSheet.create({
  head: {
    position: 'relative',
    marginTop: 30,
    paddingBottom: 17,
    borderBottomWidth: 5,
    borderBottomColor: '#203737',
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },
  label: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  backLabel: {
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
  },
  backbtn: {
    position: 'absolute',
    left: 5,
    top: -15,
    padding: 10,
    opacity: .7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  GiftedMessenger: {
    
  }
})

export default ChatConvo
