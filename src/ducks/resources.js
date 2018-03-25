import axios from "axios";

const GET_RESOURCES = "GET_RESOURCES";

export function getResources() {
  return {
    type: GET_RESOURCES,
    payload: axios
      .get("/api/resources")
      .then(response => response.data)
      .catch(err => err)
  };
}

const initialState = {
  resources: [],
  isLoading: false
};

export default function resources(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_RESOURCES}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_RESOURCES}_FULFILLED`:
      console.log(action.payload);
      return Object.assign({}, state, {
        resources: action.payload,
        isLoading: false
      });
    default:
      return state;
  }
}
