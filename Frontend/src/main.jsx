import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
// same as the code above
// import'./static/css/output.css'
import App from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
