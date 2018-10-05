import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Cards from './cards'

const store = configureStore()

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Cards />
      </Provider>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node,
}
