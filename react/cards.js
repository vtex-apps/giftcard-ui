import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                <li>
                  <Link page="admin/giftcard/card">{card.id}</Link>
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
