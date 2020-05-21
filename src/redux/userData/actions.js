import {
  TABLE_SELECTED,
  ORDER_CONFIRMED,
  AUTH_ADMIN_LOGIN,
  AUTH_ADMIN_LOGOUT,
  TABLE_VACATED
} from "./actionTypes";

export const tableSelected = payload => ({
  type: TABLE_SELECTED,
  payload
});

export const orderConfirmed = (payload, id, total) => ({
  type: ORDER_CONFIRMED,
  payload,
  id,
  total
});

export const authAdminLogin = (email, password) => ({
  type: AUTH_ADMIN_LOGIN,
  email,
  password
});

export const tableVacated = payload => ({
  type: TABLE_VACATED,
  payload
});

export const authAdminLogout = () => ({
  type: AUTH_ADMIN_LOGOUT
});
