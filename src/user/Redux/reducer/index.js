import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { teamReducer } from "./team.reducer";


export const rootreducer = combineReducers({
    counter : counterReducer,
    team: teamReducer
})