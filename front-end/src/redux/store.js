import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const myStore = legacy_createStore(reducer, applyMiddleware(thunk));

export default myStore;