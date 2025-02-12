import { createSlice } from "@reduxjs/toolkit";
import { addToCartReducer, clearCartReducer, removeFromCartReducer } from "./cartReducers";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  hasDiscount: boolean;
  discount?: number;
  thumbnailUrl: string;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: addToCartReducer,
    removeFromCart: removeFromCartReducer,
    clearCart: clearCartReducer
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
