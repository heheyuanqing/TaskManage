import {BrowserRouter,Route} from 'react-router-dom';
import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';

//引入中间件文件
import middlewareLogin from '../public/middlewares/login';
import middlewareLogup from '../public/middlewares/logup';
import middlewareHome from '../public/middlewares/homePage';
import middlewareActorTaskPage from '../public/middlewares/actorTaskPage';

//引入组件
import Login from '../public/container/login';
import Logup from '../public/container/logup';
import Home from '../public/container/homePage';
import ActorTaskPage from '../public/container/actorTaskPage';

//创建store
const createMiddlewareStore=applyMiddleware(middlewareLogin,middlewareLogup)(createStore);
let store = createMiddlewareStore(reducers);


//设置路由
render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Login}/>
                <Route path='/signin' component={Login}/>
                <Route path='/signup' component={Logup}/>
                <Route path='/home' component={Home}/>
            </div>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);