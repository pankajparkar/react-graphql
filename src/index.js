import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/graphql-s2s/src/graphqls2s';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
