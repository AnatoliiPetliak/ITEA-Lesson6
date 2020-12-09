import { CHANGE_LOCALE } from "../constants";

import config from "../config";

const initState = {
  locale: config.defaultLang,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
