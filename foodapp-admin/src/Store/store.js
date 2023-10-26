// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import rootReducer from './reducers'; // Replace with your root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
