import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import { save, load } from "redux-localstorage-simple";


const composeEnhancers =
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const createStoreWithMiddleware = applyMiddleware(
    save(), 
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load(), 
    composeEnhancers(),
);

export default store;