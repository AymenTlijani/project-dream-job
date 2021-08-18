const {
  PRO_LIST_REQUEST,
  PRO_LIST_SUCCESS,
  PRO_LIST_FAIL,
  PRO_DETAILS_REQUEST,
  PRO_DETAILS_SUCCESS,
  PRO_DETAILS_FAIL
} = require('../constants/proConstants');

export const proListReducer = (
  state = { loading: true, pro: [] },
  action
) => {
  switch (action.type) {
    case PRO_LIST_REQUEST:
      return { loading: true };
    case PRO_LIST_SUCCESS:
      return {
        loading: false,
        pros : action.payload
      };
    case PRO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


//Details
export const proDetailsReducer = (
  state = { pro: {}, loading: true },
  action
) => {
  switch (action.type) {
    case PRO_DETAILS_REQUEST:
      return { loading: true };
    case PRO_DETAILS_SUCCESS:
      return { loading: false, pro: action.payload };
    case PRO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
