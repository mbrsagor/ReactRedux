import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import store from './store';

import { login } from '../features/users/user-reducer';

// store.dispatch(
//   login({
//     username: "sagor",
//     password: "admin@2020"
//   })
// );

const Boot = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Boot;
