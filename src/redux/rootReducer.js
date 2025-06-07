import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import categoriesReducer from './features/categories/categoriesSlice';
import restaurantReducer from './features/restaurants/restaurantsSlice';
import typeReducer from './features/type/typeSlice';
import orderReducer from './features/order/orderSlice';
import addressReducer from './features/address/addressSlice';
const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  types: typeReducer,
  restaurant: restaurantReducer,
  order: orderReducer,
  address: addressReducer,
});

export default rootReducer;
