import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Link, withRuntimeContext } from 'render'

import { getCards } from './actions/cards'

import AdminLoading from './components/AdminLoading'

import { PageHeader, ResourceList, Modal, Button, Input } from 'vtex.styleguide'

class Cards extends Component {
  static contextTypes = {
    culture: PropTypes.object,
  }

  constructor() {
    super()

    this.state = {
      cards: [],
      searchValue: '',
      showModal: false,
    }
  }

  componentDidMount() {
    window.postMessage({ action: { type: 'STOP_LOADING' } }, '*')

    const data = {
      account: this.props.runtime.account,
      workspace: this.props.runtime.workspace,
    }
    this.props.getCards(data)
  }

  componentDidUpdate(prevProps) {
    if (this.props.cards !== prevProps.cards) {
      this.setState({ cards: this.props.cards })
    }
  }

  handleAddGiftCard = () => {
    console.log('handleAddGiftCard')
  }

  handleConfirmAdd = e => {
    e.preventDefault()
    this.handleCloseModal()
  }

  handleInputSearchChange = e => {
    this.setState({ searchValue: e.target.value })
  }

  handleInputSearchClear = () => {
    this.setState({ searchValue: '' })
  }

  handleInputSearchSubmit = e => {
    e.preventDefault()
    console.log('handleInputSearchSubmit')
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  handleNextClick = () => {}
  handlePrevClick = () => {}

  render() {
    const { intl, isLoading } = this.props
    const { culture } = this.context

    const schema = {
      properties: {
        id: {
          type: 'string',
          title: 'Id',
          cellRenderer: ({ cellData }) => (
            <div className="ph4 pre truncate hidden">
              <Link params={{ id: cellData }} page="admin/giftcard/card">
                {cellData}
              </Link>
            </div>
          ),
        },
        emissionDate: {
          type: 'date-time',
          title: 'Emission date',
          cellRenderer: ({ cellData }) => (
            <div className="ph4">
              {this.props.intl.formatDate(cellData, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          ),
        },
        expiringDate: {
          type: 'date-time',
          title: 'Expiring date',
          cellRenderer: ({ cellData }) => (
            <div className="ph4">
              {this.props.intl.formatDate(cellData, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          ),
        },
        balance: {
          type: 'string',
          title: 'Balance',
          cellRenderer: ({ cellData }) => (
            <div className="ph4">
              {this.props.intl.formatNumber(cellData, {
                style: 'currency',
                currency: culture.currency,
              })}
            </div>
          ),
        },
        provider: {
          type: 'string',
          title: 'Provider',
        },
      },
    }

    return (
      <div className="bg-muted-5">
        {isLoading && <AdminLoading />}

        <Modal
          centered
          isOpen={this.state.showModal}
          onClose={this.handleCloseModal}
        >
          <div style={{ minWidth: '500px' }}>
            <h2 className="mb8">Add gift card</h2>

            <form onSubmit={this.handleConfirmAdd}>
              <Input label="Default" />

              <div className="flex justify-end">
                <span className="mr4">
                  <Button variation="secondary" onClick={this.handleCloseModal}>
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
          title={intl.formatMessage({ id: 'page.cards.title' })}
          buttonLabel="+ New"
          onButtonClick={this.handleOpenModal}
        />

        <div className="pa7">
          <div className="bg-base pa7 br3">
            <ResourceList
              table={{
                schema: schema,
                items: this.state.cards,
              }}
              inputSearch={{
                value: this.state.searchValue,
                placeholder: 'Search by card id',
                onChange: this.handleInputSearchChange,
                onClear: this.handleInputSearchClear,
                onSubmit: this.handleInputSearchSubmit,
              }}
              pagination={{
                onNextClick: this.handleNextClick,
                onPrevClick: this.handlePrevClick,
                currentItemFrom: 1,
                currentItemTo: 10,
                textOf: 'de',
                textShowRows: 'show rows',
                totalItems: this.state.cards.length,
                rowsOptions: [5, 10, 15, 20],
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

Cards.defaultProps = {
  isLoading: true,
  cards: [],
}

Cards.propTypes = {
  intl: intlShape.isRequired,
  getCards: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  cards: PropTypes.array,
  runtime: PropTypes.any,
}

const mapStateToProps = state => ({
  isLoading: state.cardsReducer.isLoading,
  cards: state.cardsReducer.cards,
})

export default injectIntl(
  connect(
    mapStateToProps,
    { getCards },
  )(withRuntimeContext(Cards)),
)
