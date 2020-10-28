import {createStore} from 'redux';
import rootReducer from './reducer';

const initalState = {}

export const store = createStore(
    rootReducer,
    initalState,
)
