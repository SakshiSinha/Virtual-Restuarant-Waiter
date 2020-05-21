import {
  TABLE_SELECTED,
  ORDER_CONFIRMED,
  AUTH_ADMIN_LOGIN,
  AUTH_ADMIN_LOGOUT,
  TABLE_VACATED
} from "./actionTypes";
import FoodMenu from "../data/FoodMenu";
import { addOrders, totalOrders } from "./userUtil";

const initState = {
  tableNo: [
    "Table1",
    "Table2",
    "Table3",
    "Table4",
    "Table5",
    "Table6",
    "Table7",
    "Table8",
    "Table9",
    "Table10"
  ],
  foodMenu: FoodMenu,
  tableSelected: "",
  admin: {
    email: "abhishek@masai.com",
    password: "masai",
    isLoggedIn: false
  },
  totalOrder: [],
  totalBill: 0,
  tables: [
    {
      number: "Table1",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table2",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table3",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table4",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table5",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table6",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table7",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table8",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table9",
      reserved: false,
      orders: [],
      bill: 0
    },
    {
      number: "Table10",
      reserved: false,
      orders: [],
      bill: 0
    }
  ]
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case TABLE_SELECTED:
      return {
        ...state,
        tableSelected: action.payload,
        tables: state.tables.map(item =>
          item.number === action.payload ? { ...item, reserved: true } : item
        )
      };
    case ORDER_CONFIRMED:
      return {
        ...state,
        tables: addOrders(
          state.tables,
          action.payload,
          action.id,
          action.total
        ),
        totalOrder: totalOrders(state.totalOrder, action.payload, action.id),
        totalBill: state.totalBill + action.total
      };
    case AUTH_ADMIN_LOGIN:
      if (
        action.email === state.admin.email &&
        action.password === state.admin.password
      ) {
        return {
          ...state,
          admin: { ...state.admin, isLoggedIn: true }
        };
      }

      return state;

    case AUTH_ADMIN_LOGOUT:
      return {
        ...state,
        admin: { ...state.admin, isLoggedIn: false }
      };

    case TABLE_VACATED:
      return {
        ...state,
        tableSelected: "",
        tables: state.tables.map(item =>
          item.number === action.payload ? { ...item, reserved: false } : item
        )
      };
    default:
      return state;
  }
};

export default userReducer;
