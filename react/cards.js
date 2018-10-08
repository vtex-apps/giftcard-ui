import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { withRuntimeContext } from 'render'

import { getCards, createCard } from './actions/cards'

import Card from './card'
import AdminLoading from './components/AdminLoading'

import { PageHeader, Table, Badge } from 'vtex.styleguide'

class Cards extends Component {
  static contextTypes = {
    culture: PropTypes.object,
  }

  constructor() {
    super()

    this.state = {
      cards: [],
      searchValue: '',
      showCardForm: false,
      isCardCreation: false,
      cardData: {},
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

  handleNextClick = () => {}
  handlePrevClick = () => {}

  handleNewCard = () => {
    this.setState({ showCardForm: true, isCardCreation: true, cardData: {} })
  }

  handleCloseAddCard = () => {
    this.setState({ showCardForm: false })
  }

  handleRowClick = data => {
    this.setState({
      cardData: data.rowData,
      showCardForm: true,
      isCardCreation: false,
    })
  }

  handleCardCreation = data => {
    const d = {
      account: this.props.runtime.account,
      workspace: this.props.runtime.workspace,
    }
    this.props.createCard(d, data)
    this.handleCloseAddCard()
  }

  render() {
    const { intl, isLoading } = this.props
    const { showCardForm } = this.state

    const schema = {
      properties: {
        id: {
          type: 'string',
          title: 'Id',
          width: 60,
          cellRenderer: ({ cellData }) => (
            <div className="ph4 pre truncate hidden">{cellData}</div>
          ),
        },
        balance: {
          type: 'string',
          headerRenderer: () => <div className="ph4 tr">Balance</div>,
          cellRenderer: ({ cellData }) => (
            <div className="ph4 tr">{cellData}</div>
          ),
        },
        emissionDate: {
          type: 'date-time',
          title: 'Emission date',
          cellRenderer: ({ cellData }) => (
            <div className="ph4">
              {intl.formatDate(cellData, {
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
              {intl.formatDate(cellData, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          ),
        },
        active: {
          type: 'string',
          title: 'Status',
          cellRenderer: ({ cellData }) => (
            <div className="ph4">
              {cellData === 'true' ? (
                <Badge type="success">Active</Badge>
              ) : (
                <Badge>Inactive</Badge>
              )}
            </div>
          ),
        },
      },
    }

    return (
      <div
        className={`bg-muted-5 h-100 relative ${
          showCardForm ? 'overflow-hidden' : ''
        }`}
      >
        {isLoading && <AdminLoading />}

        <PageHeader
          title={intl.formatMessage({ id: 'page.cards.title' })}
          buttonLabel="+ New"
          onButtonClick={this.handleOpenModal}
        />

        <div className="pa7">
          <div className="bg-base pa7 br3">
            <Table
              schema={schema}
              items={this.state.cards}
              onRowClick={this.handleRowClick}
              toolbar={{
                inputSearch: {
                  value: this.state.searchValue,
                  placeholder: 'Search by card id',
                  onChange: this.handleInputSearchChange,
                  onClear: this.handleInputSearchClear,
                  onSubmit: this.handleInputSearchSubmit,
                },
                newLine: {
                  label: 'New',
                  handleCallback: this.handleNewCard,
                },
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

        {showCardForm && (
          <Card
            onOverlayClick={this.handleCloseAddCard}
            onCreateCardClick={this.handleCardCreation}
            cardData={this.state.cardData}
            isCardCreation={this.state.isCardCreation}
          />
        )}
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
  createCard: PropTypes.func.isRequired,
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
    { getCards, createCard },
  )(withRuntimeContext(Cards)),
)
