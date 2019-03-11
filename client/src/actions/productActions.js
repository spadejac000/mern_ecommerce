import axios from 'axios';
import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from './types';

export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get('http://localhost:5000')
    .then(res => dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    }))
}

export const addProduct = (product) => dispatch => {
  axios
    .post('http://localhost:5000', product)
    .then(res => dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    }))
}

export const deleteProduct = (id) => dispatch => {
  axios
    .delete(`http://localhost:5000/${id}`)
    .then(res => dispatch({
      type: DELETE_PRODUCT,
      payload: id
    }))
}

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  }
}