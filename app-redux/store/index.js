import { createStore } from 'redux';
import listReducer from '../reducers/index'

const store = createStore(listReducer);

export default store;
