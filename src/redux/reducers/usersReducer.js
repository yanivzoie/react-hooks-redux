import { SEARCH_USER, FETCH_DATA } from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      console.log('action.payload', action.payload);
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USER:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
