import * as TYPES from '../types'
import axios from 'axios'

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
