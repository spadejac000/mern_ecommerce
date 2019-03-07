import axios from 'axios';
import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from './types';

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  }
}