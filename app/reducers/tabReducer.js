import { NavigationExperimental } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const {
 Reducer: NavigationReducer
} = NavigationExperimental

const tabs = [
  { key: 'home', icon: 'md-map', title: 'Map' },
  { key: 'mapboxlist', icon: 'md-list-box', title: 'List' },
  { key: 'service', icon: 'md-funnel', title: 'Service' },
  { key: 'feedback', icon: 'md-filing', title: 'Feedback' },
  { key: 'profile', icon: 'md-contact', title: 'Profile' }
]

const tabState = NavigationReducer.TabsReducer({
  key: 'Tabs',
  initialIndex: 2,
  tabReducers: tabs.map((t) => (lastRoute) => lastRoute || t)
})

export default tabState
