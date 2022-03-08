import { combineReducers } from "redux";
import {
  parkingLotsReducer,
  parkingSlotsReducer,
  chargesReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  lots: parkingLotsReducer,
  slots: parkingSlotsReducer,
  charges: chargesReducer,
});
