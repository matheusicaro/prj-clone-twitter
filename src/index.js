import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/components/App'
import { Provider } from 'react-redux' // << Add
import { createStore } from 'redux'    // << Add
import reducer from './reducers'       // << Add
import middleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(middleware))     // << Add

ReactDOM.render(
  <Provider store={store}>             
    <App />
  </Provider>,
  document.getElementById('root')
) 