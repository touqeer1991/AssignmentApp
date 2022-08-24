export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

const initialState = []

const favouriteItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return [...state, action.payload]
    case REMOVE_FROM_FAVOURITE:
      return state.filter(item => item.id !== action.payload.id)
  }
  return state
}

export default favouriteItemsReducer