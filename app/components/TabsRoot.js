import React, { Component } from 'react'
import { View, NavigationExperimental, TabBarIOS } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const { Reducer: NavigationReducer } = NavigationExperimental
const { JumpToAction } = NavigationReducer.TabsReducer

import Chat from './Chat'
import Postal from './Postal'
import Valet from './Valet'
import Feedback from './Feedback'
import Profile from './Profile'
import MapboxList from './MapboxList'
import Home from './Home'
import Service from '../containers/navRootContainer'

class Tabs extends Component {
  _changeTab (i) {
    // const { changeTab } = this.props
    const { dispatch } = this.props
    dispatch(JumpToAction(i))
    // changeTab(i)
  }
  _renderTabContent (key) {
    switch (key) {
      case 'home':
        return <Home />
      case 'mapboxlist':
        return <MapboxList />
      case 'feedback':
        return <Feedback />
      case 'service':
        return <Service />
      case 'profile':
        return <Profile />
      case 'chat':
        return <Chat />
      case 'postal':
        return <Postal />
      case 'valet':
        return <Valet />
    }
  }
  render () {
    console.log('props: ', this.props)
    const tabs = this.props.tabs.routes.map((tab, i) => {
      return (
        <Icon.TabBarItem
          key={tab.key}
          iconName={tab.icon}
          selectedIconName={tab.selectedIcon}
          title={tab.title}
          onPress={() => this._changeTab(i)}
          selected={this.props.tabs.index === i}>
          {this._renderTabContent(tab.key)}
        </Icon.TabBarItem>
      )
    })
    return (
      <TabBarIOS tintColor='darkslategray'>
        {tabs}
      </TabBarIOS>
    )
  }
}

export default Tabs
