import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { Provider } from 'react-redux' // << Add
import { createStore } from 'redux'    // << Add
import reducer from './reducers'       // << Add
import middleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer, composeWithDevTools(middleware))     // << Add

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
) 