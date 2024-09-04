import { combineReducers } from "redux";

import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    dynamiccounter:dynamicCounterReducer
})


export default rootReducer