import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import { PageHeader } from 'vtex.styleguide'

import { getCard } from './actions/cards'

import AdminLoading from './components/AdminLoading'

class Card extends Component {
  static contextTypes = {
    navigate: PropTypes.func,
  }

  componentDidMount() {
    this.props.getCard(this.props.params.id)
  }

  handleHeaderLink = () => {
    const options = {
      page: 'admin/giftcard/cards',
    }

    this.context.navigate(options)
  }

  render() {
    const { intl, isLoading, card } = this.props

    return (
      <div>
        {isLoading && <AdminLoading />}

        <PageHeader
          onLinkClick={this.handleHeaderLink}
          linkLabel={intl.formatMessage({ id: 'card.pageHeader.backBtnLabel' })}
          title={intl.formatMessage({ id: 'page.card.title' })}
        />

        <div className="pa7">
          <pre>{JSON.stringify(card, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  card: {},
}

Card.propTypes = {
  intl: intlShape,
  params: PropTypes.object,
  getCard: PropTypes.func,
  card: PropTypes.object,
  isLoading: PropTypes.bool,
}

const mapStateToProps = state => ({
  isLoading: state.cardsReducer.isLoading,
  card: state.cardsReducer.card,
})

export default injectIntl(
  connect(
    mapStateToProps,
    { getCard },
  )(Card),
)
