import {createStore,applyMiddleware} from 'redux'
import combineReducers from './combineReducers'
import sagaApi from './mainSaga'
import makeSagaMiddleware from 'redux-saga'

const sagaMiddleware = makeSagaMiddleware()


const store = createStore(combineReducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagaApi)

export default store