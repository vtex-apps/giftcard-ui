import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Link } from 'render'

import { getCards } from './actions/cards'

import AdminLoading from './components/AdminLoading'

import { PageHeader } from 'vtex.styleguide'

class Cards extends Component {
  constructor() {
    super()

    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    this.props.getCards()
  }

  render() {
    const { intl, isLoading, cards } = this.props

    return (
      <div>
        {isLoading && <AdminLoading />}

        <PageHeader title={intl.formatMessage({ id: 'page.cards.title' })} />

        <div className="pa7">
          {cards && (
            <ul>
              {cards.map(card => (
                <li key={card.id}>
                  <Link params={{ id: card.id }} page="admin/giftcard/card">
                    {card.id}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

Cards.propTypes = {
  intl: intlShape,
  getCards: PropTypes.func,
  isLoading: PropTypes.bool,
  cards: PropTypes.array,
}

const mapStateToProps = state => ({
  isLoading: state.cardsReducer.isLoading,
  cards: state.cardsReducer.cards,
})

export default injectIntl(
  connect(
    mapStateToProps,
    { getCards },
  )(Cards),
)
