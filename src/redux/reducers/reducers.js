import {
  GET_PARKING_LOTS,
  GET_PARKING_SLOTS,
  GET_CHARGES,
} from "../actionTypes/actionTypes";

const initialState = {
  parkingLots: [],
};

export const parkingLotsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};

export const chargesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CHARGES:
      return { ...state, vCharges: payload };
    default:
      return state;
  }
};
