import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';

//引入中间件文件
import middlewareLogin from '../public/middlewares/login';
import middlewareLogup from '../public/middlewares/logup';
import middlewareHome from '../public/middlewares/homePage';
import middlewareResult from '../public/middlewares/header';
import middlewareActorTaskPage from '../public/middlewares/actorTaskPage';

//引入组件
import Login from '../public/container/login';
import Logup from '../public/container/logup';
import Home from '../public/container/homePage';
import ResultPage from '../public/container/result';
import TaskPage from '../public/container/actorTaskPage';

//创建store
/*const createMiddlewareStore=applyMiddleware(middlewareLogin,middlewareLogup,middlewareHome)(createStore);
let store = createMiddlewareStore(reducers);*/

let store;

if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
    store = createStore(
        reducers,
        applyMiddleware(middlewareLogin, middlewareLogup, middlewareHome, middlewareResult,thunk)
    );
} else {
    store = createStore(
        reducers,
        compose(applyMiddleware(middlewareLogin, middlewareLogup, middlewareHome, middlewareResult,thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

//设置路由
render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Login}/>
                <Route path='/signin' component={Login}/>
                <Route path='/signup' component={Logup}/>
                <Route path='/home' component={Home}/>
                <Route path='/result' component={ResultPage}/>
                <Route path='/myTask' component={TaskPage}/>
            </div>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);