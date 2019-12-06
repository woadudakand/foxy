import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import rootReducer from './redux/reducers/rootReducers';
import fbConfig from './config-db/fbConfig'

import App from './App';

import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig)
    )
);

const rrfProps = {
    firebase,
    config: (fbConfig, {useFirestoreForProfile : true, userProfile : 'users'}),
    dispatch: store.dispatch, 
    createFirestoreInstance        
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider>
  </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
