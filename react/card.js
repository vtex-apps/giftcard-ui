import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

import { getCard } from './actions/cards'

import AdminLoading from './components/AdminLoading'

import { PageHeader, Modal, Button, Input } from 'vtex.styleguide'

class Card extends Component {
  static contextTypes = {
    navigate: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      showModal: false,
    }
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

  handleEditGiftCard = () => {
    this.handleToggleModal()
  }

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  handleConfirmEdit = e => {
    e.preventDefault()
    this.handleToggleModal()
  }

  render() {
    const { intl, isLoading, card } = this.props

    return (
      <div>
        {isLoading && <AdminLoading />}

        <Modal
          centered
          isOpen={this.state.showModal}
          onClose={this.handleToggleModal}
        >
          <div style={{ minWidth: '500px' }}>
            <h2 className="mb8">Edit gift card</h2>

            <form onSubmit={this.handleConfirmEdit}>
              <Input label="Default" />

              <div className="flex justify-end">
                <span className="mr4">
                  <Button
                    variation="secondary"
                    onClick={this.handleToggleModal}
                  >
                    cancel
                  </Button>
                </span>
                <Button variation="primary" type="submit">
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        <PageHeader
          onLinkClick={this.handleHeaderLink}
          linkLabel={intl.formatMessage({ id: 'card.pageHeader.backBtnLabel' })}
          title={intl.formatMessage({ id: 'page.card.title' })}
          buttonLabel="Edit"
          onButtonClick={this.handleEditGiftCard}
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
