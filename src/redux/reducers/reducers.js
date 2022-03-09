import {
  GET_PARKING_LOTS,
  GET_PARKING_SLOTS,
  GET_CHARGES,
  SET_PARKING_LOTS,
  SET_PARKING_SLOTS,
  SET_CHARGES,
} from "../actionTypes/actionTypes";

const initialState = {};

export const parkingLotsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PARKING_LOTS:
      return { ...state, parkingLots: payload };
    case GET_PARKING_LOTS:
      return { ...state, parkingLots: payload };
    default:
      return state;
  }
};

export const parkingSlotsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_PARKING_SLOTS:
      return { ...state, parkingSlots: payload };
    case SET_PARKING_SLOTS:
      return { ...state, parkingSlots: payload };
    default:
      return state;
  }
};

export const chargesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CHARGES:
      return { ...state, vCharges: payload };
    case SET_CHARGES:
      return { ...state, vCharges: payload };
    default:
      return state;
  }
};
