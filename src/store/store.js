import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initalState = {};
const middleware = [thunk];

export const store = createStore(()=>[],initalState,applyMiddleware(...middleware));