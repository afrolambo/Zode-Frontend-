import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './CSS/index.css';
import { API_WS_ROOT } from './constants'

//npm Tings ~
import { ActionCableProvider } from 'react-actioncable-provider'
// import actionCable from 'actioncable'
import { BrowserRouter} from 'react-router-dom'

// const CableApp = {}

// CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  
    <ActionCableProvider url={API_WS_ROOT}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </ActionCableProvider>, 
  document.getElementById('root')
);

