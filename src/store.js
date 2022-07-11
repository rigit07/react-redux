// import { applyMiddleware } from 'redux'
// import reduxThunk from 'redux-thunk'
import { legacy_createStore as createStore } from 'redux'
import reducers from './reducers'

const Store = createStore(reducers);

export { Store };