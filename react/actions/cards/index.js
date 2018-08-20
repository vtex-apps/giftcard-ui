import * as TYPES from '../types'
import axios from 'axios'

// #region getCards
const requestGetCards = () => ({
  type: TYPES.REQUEST_CARDS,
})

const receiveGetCardsSuccess = cards => ({
  type: TYPES.RECEIVE_CARDS_SUCCESS,
  cards,
})

const receiveGetCardsError = data => ({
  type: TYPES.RECEIVE_CARDS_ERROR,
  data,
})

export const getCards = () => dispatch => {
  dispatch(requestGetCards())

  return axios(
    'https://diego--gatewayio.myvtex.com/api/vtex/giftcardv2/gatewayio/giftcards',
  )
    .then(response => dispatch(receiveGetCardsSuccess(response.data)))
    .catch(error =>
      dispatch(
        receiveGetCardsError(
          (error && error.response && error.response.data) || null,
        ),
      ),
    )
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

const receiveGetCardError = data => ({
  type: TYPES.RECEIVE_CARD_ERROR,
  data,
})

export const getCard = id => dispatch => {
  dispatch(requestGetCard(id))

  return axios(
    `https://diego--gatewayio.myvtex.com/api/vtex/giftcardv2/gatewayio/giftcards/${id}`,
  )
    .then(response => dispatch(receiveGetCardSuccess(response.data)))
    .catch(error =>
      dispatch(
        receiveGetCardError(
          (error && error.response && error.response.data) || null,
        ),
      ),
    )
}
// #endregion
