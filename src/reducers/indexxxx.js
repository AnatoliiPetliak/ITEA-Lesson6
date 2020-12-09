import { combineReducers } from "redux";

import localization from "./localization";
import todo from "./localization";

const root_reducer = combineReducers({
  todo,
  localization,
});

export default root_reducer;
