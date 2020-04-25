import { combineReducers } from "redux";
import abuDhabiReducer from "./AbuDhabiReducer";
import menuReducer from "./MenuReducer";

const rootReducer = combineReducers({
  ad: abuDhabiReducer,
  menu: menuReducer,
});

export default rootReducer;
