import { combineReducers } from "redux";
import businessReducers from "./businessReducers";
import personReducers from "./personReducers";

const reducers = combineReducers({
    business:businessReducers,
    person:personReducers
})

export type RootState = ReturnType<typeof reducers>
export default reducers