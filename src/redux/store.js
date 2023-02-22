import { createStore } from "redux";
import reduser from "./combine"
import {compose} from "redux"
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

let store;
if (process.env.NODE_ENV==="development"){
    store= createStore(reduser,composeEnhancers());
}else 
store= createStore(reduser)



export default store;