import React, { Component } from 'react'
import { StatusBar } from 'react-native'

class StatusBarRoot extends Component {
  render () {
    return (
      <StatusBar barStyle='light-content' animated networkActivityIndicatorVisible/>
    )
  }
}

export default StatusBarRoot
