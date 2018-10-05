import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import { Input, Button } from 'vtex.styleguide'

const fields = [
  'relationName',
  'emissionDate',
  'expiringDate',
  'caption',
  'redemptionCode',
  'userdocument',
  'conditions',
  'balance',
  'group',
  'active',
]

class Card extends Component {
  constructor() {
    super()

    this.state = {
      relationName: 'relation Diego17',
      emissionDate: '2018-10-04T17:57:50.743Z',
      expiringDate: '2019-10-04T17:57:50.743Z',
      caption: 'GiftCardTestKevin2',
      redemptionCode: 'redemptioncodetest',
      userdocument: '80344263428',
      conditions: '{"Document":"80344263428"}',
      balance: 171,
      group: 'group1',
      active: 'true',
    }
  }

  handleInputChange = e => {
    const name = `${e.target.name}`
    const value = e.target.value
    this.setState({ [name]: value })
  }

  handleCardCreation = () => {
    this.props.onCreateCardClick(this.state)
  }

  render() {
    const { onOverlayClick } = this.props

    return (
      <div className="absolute bottom-0 right-0 left-0 top-0 w-100 h-100 z-999">
        <div
          style={{ zIndex: '1001', background: 'rgba(0, 0, 0, 0.75)' }}
          className="flex absolute items-stretch justify-end w-50 bottom-0 right-0 left-0 top-0"
          onClick={onOverlayClick}
        />
        <div
          style={{
            zIndex: '1002',
            boxShadow: '0 12px 15px 0 rgba(0,0,0,0.25)',
          }}
          className="absolute w-50 pa6 bottom-0 right-0 top-0 overflow-x-auto bg-white"
        >
          <h1>New Card</h1>

          {fields.map(field => (
            <div key={field} className="mb5">
              <Input
                onChange={this.handleInputChange}
                value={this.state[field]}
                name={field}
                label={field}
              />
            </div>
          ))}

          <div className="flex flex-row justify-end">
            <div className="mr4">
              <Button onClick={onOverlayClick} variation="tertiary">
                cancel
              </Button>
            </div>
            <Button onClick={this.handleCardCreation}>Create</Button>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  intl: intlShape,
  onOverlayClick: PropTypes.func.isRequired,
  onCreateCardClick: PropTypes.func.isRequired,
}

export default injectIntl(Card)
