import { combineReducers } from "redux";
import iceCreamReducer from './iceCream/iceCreamReducer';

import cakeReducer from "./cakes/cakeReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    users:userReducer
})

export default rootReducer;