import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { UserReducer } from "./UserReducer";
import { UserIdReducer } from "./UserIdReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  user: UserReducer,
  userId: UserIdReducer,
});

export default rootReducer;
