import React, { Component } from 'react'
import Login from '../views/login'
import ChatConvo from './ChatConvo'
import Valet from './Valet'
import Postal from './Postal'
import Chat from './Chat'
import Service from './Service'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  Reducer: NavigationTabsReducer,
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const prefix = 'scene_'
    const { scene } = props
    if (scene.key === prefix + 'login') {
      return <Login _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (scene.key === prefix + 'service') {
      return <Service _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (scene.key === prefix + 'chat') {
      return <Chat _handleNavigate={this._handleNavigate.bind(this)}  _goBack={this._handleBackAction.bind(this)} />
    }
    if (scene.key === prefix + 'postal') {
      return <Postal _goBack={this._handleBackAction.bind(this)} />
    }
    if (scene.key === prefix + 'valet') {
      return <Valet _goBack={this._handleBackAction.bind(this)} />
    }
    if (scene.key === prefix + 'chatconvo') {
      return <ChatConvo _goBack={this._handleBackAction.bind(this)} />
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render () {
    return (
      <NavigationCardStack
        style={{flex:1}}
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
      />
    )
  }
}

export default NavRoot
