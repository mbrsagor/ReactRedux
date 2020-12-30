import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import store from './store';

store.dispatch({type: 'login'})

const Boot = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Boot;
