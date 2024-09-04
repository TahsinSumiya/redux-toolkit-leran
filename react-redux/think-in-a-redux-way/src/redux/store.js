import { applyMiddleware, createStore } from 'redux'
// import counterReducer from "./counter/counterReducer"
// import dynamicCounterReducer from './dynamicCounter/dynamicCounterReducer'
import rootReducer from './rootReducer'
import myLogger from './middlewares/myLogger'
import logger from "redux-logger";


const store = createStore(rootReducer,applyMiddleware(
    // myLogger
    logger
))


export default store