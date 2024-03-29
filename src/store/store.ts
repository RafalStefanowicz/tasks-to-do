import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "../reducers/reducers";

export const store = createStore(reducers, composeWithDevTools());
