import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux' // << Add
import { createStore } from 'redux'    // << Add
import reducer from './reducers'       // << Add

const store = createStore(reducer)     // << Add

ReactDOM.render(
  <Provider store={store}>             {/* << Add  */}
    <App />
  </Provider>,
  document.getElementById('root')
)