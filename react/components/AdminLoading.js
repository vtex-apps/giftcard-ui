import React from 'react'

class AdminLoading extends React.Component {
  componentDidMount() {
    window.postMessage({ action: { type: 'START_LOADING' } }, '*')
  }

  componentWillUnmount() {
    window.postMessage({ action: { type: 'STOP_LOADING' } }, '*')
  }

  render() {
    return null
  }
}
export default AdminLoading
