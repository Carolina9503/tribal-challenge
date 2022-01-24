import { createStore,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

//me permite utilizar las extensiones del devtools y varios  middlewares(esto lo trajimos de dar click en mas informacion en la consola a a hora de implementar el redux)
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware( thunk )),  //asi trabajamos acciones asyncronas
);
export default store;


















