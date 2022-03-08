import {
  GET_PARKING_LOTS,
  GET_PARKING_SLOTS,
  GET_CHARGES,
} from "../actionTypes/actionTypes";
import baseURL from "../../utils/axios";

export const getParkingLots = () => async (dispatch) => {
  const response = await baseURL.get("/parkinglots");
  dispatch({ type: GET_PARKING_LOTS, payload: response });
};

export const getParkingSlots = (id) => async (dispatch) => {
  const response = await baseURL.get(`/parkinglots/${id}`);
  dispatch({ type: GET_PARKING_SLOTS, payload: response });
};

export const getCharges = (vType) => async (dispatch) => {
  const response = await baseURL.get(`/charges/${vType}`);
  dispatch({ type: GET_CHARGES, payload: response });
};
