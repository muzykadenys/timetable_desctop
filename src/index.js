import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';


// const default_state = {
//   test: "suck some dick"
// }

// const get_reducer = (state = default_state, action) =>{
//     switch (action.type){
//       case "test":
//         return {...state}
//       default:
//         return state
//     }
// }

// const store = createStore(get_reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
