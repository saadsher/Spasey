import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

const routeChat = {
  type: 'push',
  route: {
    key: 'chat',
    title: 'Chat'
  }
}

const routePostal = {
  type: 'push',
  route: {
    key: 'postal',
    title: 'Postal'
  }
}

const routeValet = {
  type: 'push',
  route: {
    key: 'valet',
    title: 'Valet'
  }
}

const Service = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>S E R V I C E</Text>
    <TouchableHighlight underlayColor='darkslategray' onPress={() => _handleNavigate(routeChat)} style={styles.chatbtn}>
      <Text style={styles.label}>C H A T</Text>
    </TouchableHighlight>
    <TouchableHighlight underlayColor='lightslategray' onPress={() => _handleNavigate(routePostal)} style={styles.postalbtn}>
      <Text style={styles.label}>P O S T A L</Text>
    </TouchableHighlight>
    <TouchableHighlight underlayColor='teal' onPress={() => _handleNavigate(routeValet)} style={styles.valetbtn}>
      <Text style={styles.label}>V A L E T</Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 21,
    marginBottom: 50
  },
  title: {
    position: 'absolute',
    top: 21,
    left: 0,
    width: 373,
    fontSize: 11,
    textAlign: 'center',
    color: 'darkslategray'
  },
  btncontainer: {
    justifyContent: 'center',
    marginBottom: 50
  },
  label: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250
  },
  chatbtn: {
    width: 373,
    height: 150,
    padding: 10,
    marginBottom: 5,
    opacity: .7,
    backgroundColor: 'darkslategray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  postalbtn: {
    width: 373,
    height: 150,
    padding: 10,
    marginBottom: 5,
    opacity: .7,
    backgroundColor: 'lightslategray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  valetbtn: {
    width: 373,
    height: 150,
    padding: 10,
    marginBottom: 5,
    opacity: .7,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Service
