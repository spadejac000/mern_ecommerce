import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from '../actions/types';

const initialState = {
  products: [],
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
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