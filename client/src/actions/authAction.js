import axios from "axios";
import { returnErrors } from "./errorAction";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";

// Check token & load user
export const loadUser = () => async (dispatch, getState) => {

    const base_URL = "https://zeenux.herokuapp.com/api/auth/user";
    
    
    //    User loading
    dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get(base_URL, tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    // dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const signUp = ({name, email, password} ) => async (dispatch) => {
  const base_URL = "https://zeenux.herokuapp.com/api/users";

  // Headers
  const config = {
  headers: {
    'Content-Type': 'application/json'
  }
  }
  
  // Request body
  const body = JSON.stringify({name, email, password})

  try {
    const res = await axios.post(base_URL, body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
    
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
    dispatch({
      type: REGISTER_FAIL
    })
  }
}
// Login User

export const login = ({ email, password} ) => async (dispatch) => {
  const base_URL = "https://zeenux.herokuapp.com/api/auth";

  // Headers
  const config = {
  headers: {
    'Content-Type': 'application/json'
  }
  }
  
  // Request body
  const body = JSON.stringify({ email, password})

  try {
    const res = await axios.post(base_URL, body, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS 
  }
}


//  Setup config/headers and token
export const tokenConfig = getState => {
      // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

    return config
}