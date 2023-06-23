import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
    userReducer,
    modalReducer,
});
const store = createStore(rootReducer);
console.log(store.getState())
export default store;