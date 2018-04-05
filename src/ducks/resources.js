import axios from "axios";

const GET_RESOURCES = "GET_RESOURCES";
const GET_GENERAL_TOPICS = "GET_GENERAL_TOPICS"
const GET_TOPICS = "GET_TOPICS"

export function getResources() {
  return {
    type: GET_RESOURCES,
    payload: axios
      .get("/api/resources")
      .then(response => response.data)
      .catch(err => err)
  };
}
export function getGeneralTopics() {
  return {
    type: GET_GENERAL_TOPICS,
    payload: axios
      .get('/api/generalTopics')
      .then(response => response.data)
      .catch(err => err)
  };
}
export function getTopics() {
  return {
    type: GET_TOPICS,
    payload: axios
      .get('/api/topics')
      .then(response => response.data)
      .catch(err => err)
  };
}

const initialState = {
  resources: [],
  topics: [],
  generalTopics: [],
  isLoading: false,
  choices: ['one', 'two', 'three']
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
    case `${GET_GENERAL_TOPICS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_GENERAL_TOPICS}_FULFILLED`:
      console.log(action.payload);
      return Object.assign({}, state, {
        generalTopics: action.payload,
        isLoading: false
      });
    case `${GET_TOPICS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_TOPICS}_FULFILLED`:
      console.log(action.payload);
      return Object.assign({}, state, {
        topics: action.payload,
        isLoading: false
      });
    default:
      return state;
  }
}
