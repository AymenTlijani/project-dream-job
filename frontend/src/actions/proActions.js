import Axios from 'axios';
import {
  PRO_LIST_FAIL,
  PRO_LIST_REQUEST,
  PRO_LIST_SUCCESS,
  PRO_DETAILS_REQUEST,
  PRO_DETAILS_SUCCESS,
  PRO_DETAILS_FAIL
} from '../constants/proConstants';

export const listPros = () => async (dispatch) => {
  dispatch({
    type: PRO_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/professionals');
    dispatch({ type: PRO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRO_LIST_FAIL, payload: error.message });
  }
};

// details pro
export const detailsPro = (proId) => async (dispatch) => {
  dispatch({ type: PRO_DETAILS_REQUEST, payload: proId });
  try {
    const { data } = await Axios.get(`/api/professionals/${proId}`);
    dispatch({ type: PRO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};