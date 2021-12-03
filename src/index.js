import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './modules/app/app.component';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';
import 'bootstrap';
import {FeedbackButtonComponent} from "./modules/common/components/buttons/feedback-button.component";
import {HelpButtonComponent} from "./modules/common/components/buttons/help-button.component";


ReactDOM.render(
  <React.StrictMode>
      <FeedbackButtonComponent/>
      <HelpButtonComponent/>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
