import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import { fields } from './constants'
import { Input, Button } from 'vtex.styleguide'

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      relationName: props.cardData.relationName || '',
      emissionDate: props.cardData.emissionDate || '',
      expiringDate: props.cardData.expiringDate || '',
      caption: props.cardData.caption || '',
      redemptionCode: props.cardData.redemptionCode || '',
      userdocument: props.cardData.userdocument || '',
      conditions: props.cardData.conditions || '',
      balance: props.cardData.balance || '',
      group: props.cardData.group || '',
      active: props.cardData.active || '',
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
    const { onOverlayClick, isCardCreation } = this.props

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
          <h1>{isCardCreation ? 'New Card' : 'Card details'}</h1>

          {fields.map(field => (
            <div key={field} className="mb5">
              {isCardCreation ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state[field].toString()}
                  name={field}
                  label={field}
                />
              ) : (
                <div>
                  <label>{field}</label>
                  <div>{this.state[field]}</div>
                </div>
              )}
            </div>
          ))}

          {isCardCreation && (
            <div className="flex flex-row justify-end">
              <div className="mr4">
                <Button onClick={onOverlayClick} variation="tertiary">
                  cancel
                </Button>
              </div>
              <Button onClick={this.handleCardCreation}>Create</Button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  cardData: {},
}

Card.propTypes = {
  intl: intlShape,
  cardData: PropTypes.object,
  isCardCreation: PropTypes.bool,
  onOverlayClick: PropTypes.func.isRequired,
  onCreateCardClick: PropTypes.func.isRequired,
}

export default injectIntl(Card)
