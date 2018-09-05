import * as TYPES from '../types'
// import axios from 'axios'

export const mock = [
  {
    id: 'cfcf6107-95dd-11e8-8208-eb53568c721d',
    redemptionToken: 'e403b0d3-dcaf-4e2b-9811-3fd026f5f996',
    redemptionCode: '6388-0D98-4D1D-8358',
    balance: 1148.94,
    relationName: 'RelationTest',
    emissionDate: '2018-08-01T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'CaptionTest',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/cfcf6107-95dd-11e8-8208-eb53568c721d/transactions',
    },
  },
  {
    id: '4ef5b968-9a58-11e8-8208-9e6f9a1636ce',
    redemptionToken: 'a7639981-5031-41ce-a1a0-30f5e8b083c2',
    redemptionCode: 'E327-DBF8-464B-9645',
    balance: 5550,
    relationName: 'RelationTest2',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'CaptionTest2',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/4ef5b968-9a58-11e8-8208-9e6f9a1636ce/transactions',
    },
  },
  {
    id: '23cfd681-9a89-11e8-8208-9e6f9a1636ce',
    redemptionToken: '2b00684d-e96b-478e-8c39-f512d8081cbf',
    redemptionCode: '09D6-640F-4239-8BCC',
    balance: 55.87,
    relationName: 'Relation6',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-30T00:00:00',
    caption: 'Caption6',
    provider: 'VtexGiftCardV2',
    conditions: '{"Document": "84106485397"}',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/23cfd681-9a89-11e8-8208-9e6f9a1636ce/transactions',
    },
  },
  {
    id: '3bd50081-9a90-11e8-8208-9e6f9a1636ce',
    redemptionToken: '53537206-3e60-4eb6-b9e4-254f46e678e3',
    redemptionCode: 'B96D-1D45-419F-A18F',
    balance: 33.66,
    relationName: 'Relation8',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'Caption8',
    provider: 'VtexGiftCardV2',
    conditions: '{"Document": "12753339740"}',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/3bd50081-9a90-11e8-8208-9e6f9a1636ce/transactions',
    },
  },
  {
    id: '56f9a943-9a7a-11e8-8208-e7f978bb8b3f',
    redemptionToken: '9448402c-6aaf-4ccd-ab42-206930e57581',
    redemptionCode: '5EC0-8415-404B-B3F8',
    balance: 123.23,
    relationName: 'RelationName4',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'Caption4',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/56f9a943-9a7a-11e8-8208-e7f978bb8b3f/transactions',
    },
  },
  {
    id: 'c07b2127-9a8d-11e8-8208-edf34a51fc11',
    redemptionToken: '1d262b01-e2c5-41c8-9dc3-74fad4dfb64d',
    redemptionCode: '0346-D7CE-44A9-BAE5',
    balance: 12.9,
    relationName: 'Relation7',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'Caption7',
    provider: 'VtexGiftCardV2',
    conditions: '{"Document": "82762810442"}',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/c07b2127-9a8d-11e8-8208-edf34a51fc11/transactions',
    },
  },
  {
    id: '08282297-9a7a-11e8-8208-d56477d09469',
    redemptionToken: '6487454e-9906-46ba-98b4-a9f6f1c27478',
    redemptionCode: '3895-5DD0-4390-AACD',
    balance: 356.99,
    relationName: 'Relation3',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'Caption3',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/08282297-9a7a-11e8-8208-d56477d09469/transactions',
    },
  },
  {
    id: '7cbb1c24-9a7a-11e8-8208-c25ef8abc185',
    redemptionToken: 'c220809f-4649-4ab7-b5ab-c20bc7a0985e',
    redemptionCode: '6345-8D5C-4FBA-BA98',
    balance: 234.55,
    relationName: 'Relation5',
    emissionDate: '2018-08-07T00:00:00',
    expiringDate: '2018-08-31T00:00:00',
    caption: 'cAptIon5',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/7cbb1c24-9a7a-11e8-8208-c25ef8abc185/transactions',
    },
  },
  {
    id: '217461f3-9b5f-11e8-8208-92a287a454d4',
    redemptionToken: '5588e64b-ae0a-4c62-ae67-63188e9400d5',
    redemptionCode: 'EF2D-A2A5-4A40-AD0C',
    balance: 33.43,
    relationName: 'Relation9',
    emissionDate: '2018-08-08T00:00:00',
    expiringDate: '2018-08-24T00:00:00',
    caption: 'Caption9',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/217461f3-9b5f-11e8-8208-92a287a454d4/transactions',
    },
  },
  {
    id: '2f6efcde-9b5f-11e8-8208-e245f99fab41',
    redemptionToken: '6212222d-930f-406e-83ca-54ada343e295',
    redemptionCode: '6A7D-AB4D-45DE-BF1C',
    balance: 34.43,
    relationName: 'Relation10',
    emissionDate: '2018-08-08T00:00:00',
    expiringDate: '2018-08-24T00:00:00',
    caption: 'Caption10',
    provider: 'VtexGiftCardV2',
    conditions: 'empty',
    discount: false,
    groupName: null,
    transaction: {
      href:
        'gatewayio/giftcardproviders/VtexGiftCardV2/giftcards/2f6efcde-9b5f-11e8-8208-e245f99fab41/transactions',
    },
  },
]

// #region getCards
const requestGetCards = () => ({
  type: TYPES.REQUEST_CARDS,
})

const receiveGetCardsSuccess = cards => ({
  type: TYPES.RECEIVE_CARDS_SUCCESS,
  cards,
})

// const receiveGetCardsError = data => ({
//   type: TYPES.RECEIVE_CARDS_ERROR,
//   data,
// })

export const getCards = () => dispatch => {
  dispatch(requestGetCards())

  // return axios('https://vtex-giftcard-v2.gatewayio.aws-us-east-2.vtex.io/gatewayio/diego/api/vtex/giftcardv2/gatewayio/giftcards',
  // )
  //   .then(response => {
  //     console.log('response:', response)
  //     if (Array.isArray(response.data)) {
  dispatch(receiveGetCardsSuccess(mock))
  //   } else {
  //     dispatch(receiveGetCardsError())
  //   }
  // })
  // .catch(error =>
  //   dispatch(
  //     receiveGetCardsError(
  //       (error && error.response && error.response.data) || null,
  //     ),
  //   ),
  // )
}
// #endregion

// #region getCard
const requestGetCard = id => ({
  type: TYPES.REQUEST_CARD,
  id,
})

const receiveGetCardSuccess = card => ({
  type: TYPES.RECEIVE_CARD_SUCCESS,
  card,
})

// const receiveGetCardError = data => ({
//   type: TYPES.RECEIVE_CARD_ERROR,
//   data,
// })

export const getCard = id => dispatch => {
  dispatch(requestGetCard(id))

  // return axios(
  //   `https://diego--gatewayio.myvtex.com/api/vtex/giftcardv2/gatewayio/giftcards/${id}`,
  // )
  //   .then(response => {
  dispatch(receiveGetCardSuccess(mock[0]))
  // })
  // .catch(error =>
  //   dispatch(
  //     receiveGetCardError(
  //       (error && error.response && error.response.data) || null,
  //     ),
  //   ),
  // )
}
// #endregion
