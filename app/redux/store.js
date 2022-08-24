import { createStore } from 'redux'
import cartItemsReducer from './Favourite'

const store = createStore(cartItemsReducer)

export default store
