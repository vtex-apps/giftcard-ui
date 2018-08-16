import React, { Component } from 'react'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'

import { PageHeader } from 'vtex.styleguide'

class Card extends Component {
  render() {
    const { intl } = this.props
    return (
      <div>
        <PageHeader title={intl.formatMessage({ id: 'page.card.title' })} />
        <div className="pa7">card</div>
      </div>
    )
  }
}

Card.propTypes = {
  intl: intlShape,
}

const mapStateToProps = () => ({})

export default injectIntl(
  connect(
    mapStateToProps,
    {},
  )(Card),
)
