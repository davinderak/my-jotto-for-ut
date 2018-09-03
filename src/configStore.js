/*import { applyMiddleware } from 'redux';
import rootReducers from './reducers';
import Thunk from 'redux-thunk';

export const middleWares = [Thunk];
const createStoreWithMiddleware = applyMiddleware(...middleWares);

export default createStoreWithMiddleware(rootReducers);*/


import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);