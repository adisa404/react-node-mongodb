import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Sentry.init({
  dsn: 'https://b137dd3abeb2425db4d8cabe36ba868b@sentry.io/1778014'
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
