import { SEARCH_USER, FETCH_DATA } from './types';
import axios from 'axios';

export const searchUser = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_USER, //the type of the function that we use
    payload: text, //the parameter that we want
  });
};

export const fetchData = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      dispatch({
        type: FETCH_DATA,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
