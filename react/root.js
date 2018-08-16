import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

export default class Root extends React.Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

Root.propTypes = {
  children: PropTypes.node,
}
