/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import RootScreen from './src/components/rootnavigation/RootScreen';
import allReducers from './src/redux/reducers/allReducers';

//import TaiKhoancontainer from './src/redux/containers/container'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/reduxSaga/rootSaga';

const sagaMiddleware=createSagaMiddleware();
const store=createStore(allReducers,applyMiddleware(sagaMiddleware));

export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
              <RootScreen></RootScreen>
        </Provider>
      );
  }
}
sagaMiddleware.run(rootSaga);


