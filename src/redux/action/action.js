import {
  GET_PARKING_LOTS,
  GET_PARKING_SLOTS,
  GET_CHARGES,
  SET_PARKING_LOTS,
  SET_PARKING_SLOTS,
  SET_CHARGES,
} from "../actionTypes/actionTypes";
import baseURL from "../../utils/axios";

export const getParkingLots = () => async (dispatch) => {
  const response = await baseURL.get("/parking");
  dispatch({ type: GET_PARKING_LOTS, payload: response.data.item });
};

export const setParkingLots = (lots) => {
  return {
    type: SET_PARKING_LOTS,
    payload: lots,
  };
};

export const getParkingSlots = (id) => async (dispatch) => {
  const response = await baseURL.get(`/parking/${id}`);
  dispatch({ type: GET_PARKING_SLOTS, payload: response.data.item });
};

export const setParkingSlots = (slots) => {
  return {
    type: SET_PARKING_SLOTS,
    payload: slots,
  };
};

export const getCharges = (vType) => async (dispatch) => {
  const response = await baseURL.get(`/charges/${vType}`);
  dispatch({ type: GET_CHARGES, payload: response });
};

export const setCharges = (charges) => {
  return {
    type: SET_CHARGES,
    payload: charges,
  };
};
