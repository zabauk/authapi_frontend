import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login'
import {Route, BrowserRouter} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'

//router for page route
function Router(){
  return (
    <React.StrictMode>
       <CookiesProvider>
       <BrowserRouter>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
       </CookiesProvider>
    </React.StrictMode>
  )
}
ReactDOM.render(<Router />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
