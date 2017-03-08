import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const routeChat = {
  type: 'push',
  route: {
    key: 'chatconvo',
    title: 'ChatConvo'
  }
}

const Chat = ({_handleNavigate, _goBack}) => (
  <View style={styles.container}>
    {/*<StatusBar barStyle='default' animated networkActivityIndicatorVisible/>*/}
    <Text style={styles.title}>C H A T</Text>
    <TouchableHighlight underlayColor='darkslategray' onPress={_goBack} style={styles.backbtn}>
      <Text style={styles.backLabel}>
        <Icon name="ios-arrow-back" size={25} color="white" />
      </Text>
    </TouchableHighlight>
    {/* <View style={styles.content}> */}
      <TouchableHighlight underlayColor='darkslategray' onPress={() => _handleNavigate(routeChat)} style={styles.chatbtn}>
        <Text style={styles.label}>C O N V O</Text>
      </TouchableHighlight>
    {/* </View> */}
  </View>
)

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 30,
    paddingBottom: 17,
    width: 373,
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },
  label: {
    color: 'darkslategray',
    fontSize: 24,
    textAlign: 'center'
  },
  backLabel: {
    color: 'white',
  },
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'darkslategray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  content: {
    // flex: 1,
    // paddingTop: 21,
  },
  backbtn: {
    position: 'absolute',
    left: 5,
    top: 15,
    padding: 10,
    opacity: .7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatbtn: {
    // flex: 1,
    height: 180,
    padding: 10,
    marginBottom: 5,
    opacity: .7,
    backgroundColor: 'white',
    borderBottomWidth: 5,
    borderBottomColor: '#203737',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  }
})

export default Chat
