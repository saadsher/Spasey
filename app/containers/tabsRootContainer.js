import { connect } from 'react-redux'
import StatusBarRoot from '../components/StatusBarRoot'
import TabsRoot from '../components/TabsRoot'

function mapStateToProps (state) {
  return {
    tabs: state.tabReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsRoot)
