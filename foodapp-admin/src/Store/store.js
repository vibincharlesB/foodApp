// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import rootReducer from './Reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
