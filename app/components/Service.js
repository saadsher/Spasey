import React from 'react'
import {
  View,
  ScrollView,
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
    <ScrollView style={styles.body}>
      <TouchableHighlight underlayColor='darkgray' onPress={() => _handleNavigate(routeChat)} style={styles.chatbtn}>
        <Text style={styles.label}>C H A T</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='darkgray' onPress={() => _handleNavigate(routePostal)} style={styles.postalbtn}>
        <Text style={styles.label}>P O S T A L</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='darkgray' onPress={() => _handleNavigate(routeValet)} style={styles.valetbtn}>
        <Text style={styles.label}>V A L E T</Text>
      </TouchableHighlight>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'darkslategray',
    paddingTop: 21,
    paddingBottom: 7
  },
  body: {
    backgroundColor: 'darkslategray',
  },
  label: {
    color: 'darkslategray',
    fontSize: 24,
    textAlign: 'center'
  },
  chatbtn: {
    height: 192,
    padding: 10,
    opacity: .7,
    backgroundColor: 'white',
    borderBottomWidth: 5,
    borderBottomColor: '#203737',
    justifyContent: 'center',
    marginTop: -20,
  },
  postalbtn: {
    height: 192,
    padding: 10,
    opacity: .7,
    backgroundColor: 'white',
    borderBottomWidth: 5,
    borderBottomColor: '#203737',
    justifyContent: 'center',
  },
  valetbtn: {
    height: 192,
    padding: 10,
    opacity: .7,
    backgroundColor: 'white',
    borderBottomWidth: 5,
    borderBottomColor: '#203737',
    justifyContent: 'center',
  }
})

export default Service
