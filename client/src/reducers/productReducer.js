import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from '../actions/types';

const initialState = {
  Product: [],
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      }
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}