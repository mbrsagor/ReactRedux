import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './root-reducers';


/**
 * Custom middleware
*/
// function csutomLogger(store) {
//     return function (next) {
//         return function (action) {
            
//         }
//     }
// }

const customLogger = stoe => next => action => {
    // action.type = 'logout';
    // action.payload = {
    //     name: 'Mbr Sagor',
    //     email: 'mbrsagor@gmail.com',

    // }
    // next(action)
    console.log(`Action - ${action.type}`);
    next(action)
}

const middleware = [thunk, logger, customLogger];
const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace:true})
))

export default store;
