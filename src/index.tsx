import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { LoginContainer } from './pages/login/loginContainer';
import { HomeContainer } from './pages/home/homeContainer';
/* tslint:disable */
let store = createStore(
    reducers,
    compose(
        applyMiddleware(reduxThunk),
        window['devToolsExtension'] ? window['devToolsExtension']() : f => f
    )
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="login" component={LoginContainer}/>
                    <Route path="home" component={HomeContainer}/>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
