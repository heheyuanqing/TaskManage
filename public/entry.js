import {Router,Route,browserHistory} from 'react-router';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(reducers);

render(
    <Provider store={store}>
       <Router>
           <Route path="/" component={} />
       </Router>
    </Provider>,
    document.getElementById('login')
);