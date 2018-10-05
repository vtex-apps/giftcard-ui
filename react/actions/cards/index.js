import * as TYPES from '../types'
import axios from 'axios'

const localApiBase = ({ workspace, account }) =>
  `https://${workspace}--${account}.myvtex.com/_v`

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

export const getCards = data => dispatch => {
  dispatch(requestGetCards(data))

  const { account, workspace } = data
  const url = `${localApiBase({ account, workspace })}/getgiftcards`

  return axios(url)
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

// #region create card
const requestCardCreation = (data, cardData) => ({
  type: TYPES.REQUEST_CARD_CREATION,
  data,
  cardData,
})

const receiveCardCreationSuccess = response => ({
  type: TYPES.RECEIVE_CARD_CREATION_SUCCESS,
  response,
})

const receiveCardCreationError = data => ({
  type: TYPES.RECEIVE_CARD_CREATION_ERROR,
  data,
})

export const createCard = (data, cardData) => dispatch => {
  dispatch(requestCardCreation(data, cardData))

  const { account, workspace } = data
  const url = `${localApiBase({ account, workspace })}/postgiftcard`

  return axios
    .post(url, cardData)
    .then(response => {
      if (response.status === 200) {
        dispatch(receiveCardCreationSuccess(response))
      } else {
        dispatch(receiveCardCreationError(response.status))
      }
    })
    .catch(error =>
      dispatch(
        receiveCardCreationError(
          (error && error.response && error.response.data) || null,
        ),
      ),
    )
}
// #endregion
