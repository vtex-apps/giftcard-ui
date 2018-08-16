import * as TYPES from '../../actions/types'

const initialState = {
  isLoading: false,
}

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.REQUEST_CARDS: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case TYPES.RECEIVE_CARDS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cards: action.cards,
      }
    }
    case TYPES.RECEIVE_CARDS_ERROR: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}

export default cardsReducer
