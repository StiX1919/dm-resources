import axios from "axios";

const GET_USER = "GET_USER";
const LOGOUT = "LOGOUT";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/user")
      .then(response => response.data)
      .catch(err => err)
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios.post("/api/logout")
  };
}

const initialState = {
  user: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });
    case LOGOUT:
      return Object.assign({}, state, { user: {} });
    default:
      return state;
  }
}
